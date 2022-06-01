import React, { useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux';
import { MdMoreVert, MdSearch } from 'react-icons/md'
import { RiCloseLine } from 'react-icons/ri'
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import 'firebase/firestore'
import 'firebase/auth'
//------------------------------------------------------------------------------
import { Container } from './styles'
import insert from '~/assets/insert_photo-24px.svg';
import firebase from '~/services/firebase'
import ChatMessage from '../ChatMessage'
import Searchbar from '~/components/Searchbar';
import api from '~/services/api';

function NewMessageDiv({
  chatMessages,
  loadFollowers, loadFollowing, loadMessages,
  message,
  newWorkerData,
  oldChatId,
  setChatMessages, setForwardValue, setOldChatId,
}) {
  const user_id = useSelector(state => state.user.profile.id)

  const [messageDropMenu, setMessageDropMenu] = useState();
  const [toggleDropMenu, setToggleDropMenu] = useState(false);
  const [replyValue, setReplyValue] = useState();
  const [replySender, setReplySender] = useState();
  const [toggleMessageSearch, setToggleMessageSearch] = useState();
  const [messages, setMessages] = useState();
  const [defaultMessages, setDefaultMessages] = useState();
  const [load, setLoad] = useState();
  const [inputState, setInputState] = useState(); // chat message state stays here in order (instead of MessageDiv) to update new message bell.
  const [toggleHeaderDropMenu, setToggleHeaderDropMenu] = useState();
  const [chatMessage, setChatMessage] = useState();

  const messageRef = useRef();
  const lastMessageRef = useRef();

  const firestore = firebase.firestore()
  const newChatId = Math.floor(Math.random() * 1000000)

  // console.log('new chat', newChatId)
  // console.log('old chat', oldChatId)

  let messagesRef = oldChatId !== null
    ? firestore.collection(`messages/chat/${oldChatId}`)
    : firestore.collection(`messages/chat/${newChatId}`)

  const formattedMessageDate = fdate =>
  fdate == null
    ? ''
    : format(fdate, "dd'/'MMM'/'yyyy HH:mm", { locale: ptBR });

  useEffect(() => {
    getMessages()
    setOldChatId(null) // without this chatMessages doesn't update.
  }, [newWorkerData, message]);

  function handleToggleMessageSearch() {
    if(toggleMessageSearch) {
      setToggleMessageSearch(false)
      handleUpdateInput('')
    } else {
      setToggleMessageSearch(true)
    }
  }

  const handleUpdateInput = async (input) => {
    const filteredList = defaultMessages.filter(t => {
      let messageSearch = t.message
      return messageSearch.toLowerCase().includes(input.toLowerCase())
    });
    setMessages(filteredList);
  }

  function handleMessageDropMenu(position) {
    setMessageDropMenu(position)
    setToggleDropMenu(!toggleDropMenu)
  }

  function handleReply(message, sender) {
    setReplyValue(message)
    setReplySender(sender)
    setToggleDropMenu(false)
  }

  function handleForward(message) {
    setForwardValue(message)
    setToggleDropMenu(false)
  }

  async function handleMessageDelete(id) {
    // Firebase Messaging ***
    firestore.collection(`messages/chat/${message.chat_id}`)
      .doc(`${id}`)
      .update({
        message: "mensagem removida",
        removed_message: true,
      })
      .then(() => {
        console.log("Document successfully removed!");
      })
      .catch((error) => {
        console.log("Error writing document: ", error);
      })
    setToggleDropMenu(false)
    getMessages()
  }

  let messagesResponse = null;

  async function getMessages() {

    if (oldChatId) {
      messagesResponse = firestore.collection(`messages/chat/${oldChatId}`)
      // console.log('old')
    } else {
      messagesResponse = firestore.collection(`messages/chat/${newChatId}`)
      // console.log('new')
    }
    const unsubscribe = await messagesResponse
      .orderBy('createdAt')
      .onSnapshot((querySnapshot) => {
        querySnapshot.docChanges().forEach((change) => {
          if (change.type === "added") {
            const data = querySnapshot.docs.map(doc => ({
              ...doc.data(),
            }));
              setMessages(data)
              setChatMessages(data)
              setDefaultMessages(data)
          }
        })
      })
    return unsubscribe;
  }

  async function handleMessageSubmit(e) {
    try {
      setLoad(true)
      e.preventDefault()
      let newMessage = null;
      const message_id = Math.floor(Math.random() * 1000000)

      let formattedTimeStamp = formattedMessageDate(new Date())
      if (replyValue) {
        newMessage = {
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          forward_message: false,
          id: message_id,
          message: chatMessage,
          receiver_id: newWorkerData.id,
          reply_message: replyValue,
          reply_sender: replySender,
          sender: "user",
          sender_id: user_id,
          timestamp: formattedTimeStamp,
          user_read: true,
          visible: true,
          worker_read: false,
        }
      } else {
        newMessage = {
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          forward_message: false,
          id: message_id,
          message: chatMessage,
          receiver_id: newWorkerData.id,
          reply_message: '',
          reply_sender: '',
          sender: "user",
          sender_id: user_id,
          timestamp: formattedTimeStamp,
          user_read: true,
          visible: true,
          worker_read: false,
        }
      }

      // Firebase Messaging ***
      await messagesRef
        .doc(`${message_id}`)
        .set(newMessage)
        .then(() => {
          console.log("Document successfully written!");

          // if(firstMessage === true) {
          if(oldChatId === null) {
            api.post('/messages', {
              user_id: user_id,
              worker_id: newWorkerData.id,
              chat_id: newChatId,
              messaged_at: JSON.stringify(new Date()),
            });
            // dispatch(updateMessagesRequest(new Date()))
            setOldChatId(newChatId)
            loadMessages()
            return
          }

          api.put(`/messages/${oldChatId}`, {
            messaged_at: JSON.stringify(new Date()),
          })

        })
        .catch((error) => {
          console.log("Error writing document: ", error);
      });

      // await api.put(`/messages/${newChatId}`, {
      //   messaged_at: JSON.stringify(new Date()),
      // })

      setChatMessage(); // adds latest message to chat.
      setReplyValue();
      loadFollowers('');
      loadFollowing('');
      getMessages()
      loadMessages()

      // Scroll Into View ***
      // lastMessageRef.current.scrollIntoView(false, { behavior: 'smooth' });
      // if(messages && messages.length > 3) scrollIntoLastMessage()
      messageRef.current.value = '';
      messageRef.current.focus()
      setLoad(false)
    }
    catch(error) {
      console.log(error)
    }
  }

  async function handleClearMessages() {
    const editedTaskMessages = messages;
    editedTaskMessages.map(e => {
      e.visible = false;
      return e
    })
    // await api.put(`messages/update/${task.message_id}`, {
    //   messages:  editedTaskMessages
    // });
    setChatMessage();
    setToggleHeaderDropMenu(false)
  }
  //----------------------------------------------------------------------------
  return (
    <Container>
      <header className='message-header'>
        {/* <strong className="message-header-strong">Chat:</strong> */}
        <div className="list-header">
          <div className="worker-profile-div">
            { toggleMessageSearch
              ? (
                <Searchbar
                  className="header-input"
                  input={inputState}
                  onChange={handleUpdateInput}
                  placeholder="Palavra-chave"
                />
              )
              :
              (
                <div className="worker-tag">
                  { newWorkerData === null || newWorkerData === undefined || newWorkerData.avatar === null || newWorkerData.avatar === undefined
                    ? (
                      <div className="image-background-div">
                        <img src={insert} alt="Worker"/>
                      </div>
                    )
                    : (
                      <div className="image-background-div">
                        <img src={newWorkerData.avatar.url} alt="Worker"/>
                      </div>
                    )
                  }
                  <label className="worker-profile-label">{newWorkerData.worker_name}</label>
                </div>
              )
            }
          </div>

          <div className="message-menu-div">
            <button
              className="message-menu-button"
              onClick={() => handleToggleMessageSearch()}
            >
              <MdSearch
                className='message-menu-icon'
                size={20}
                color='#fff'
              />
            </button>
            <div className="others-menu-div">
              <button
                className="message-menu-button"
                onClick={() => setToggleHeaderDropMenu(!toggleHeaderDropMenu)}
              >
                <MdMoreVert
                  className='message-menu-icon'
                  size={20}
                  color='#fff'

                />
              </button>
              { toggleHeaderDropMenu
                ? (
                  <ul
                    className="others-drop-menu-ul"
                    // className="message-dropMenu-ul"
                  >
                    <li className="others-drop-menu-li">
                      <button className="others-drop-menu-button"
                        onClick={() => handleClearMessages()}
                      >Limpar a conversa</button>
                    </li>
                  </ul>
                )
                : (
                  null
                )
              }
            </div>
          </div>
        </div>
      </header>

      {/* messages */}
      <div className="message-conversation-div">
        {
          // messages
          chatMessages
          ? (
            // messages.map((m, index) => (
              chatMessages.map((m, index) => (
            <>
              <ChatMessage
                handleForward={handleForward}
                handleMessageDelete={handleMessageDelete}
                handleMessageDropMenu={handleMessageDropMenu}
                handleReply={handleReply}
                index={index}
                key={index}
                lastMessageRef={lastMessageRef}
                m={m}
                message={message}
                messageDropMenu={messageDropMenu}
                toggleDropMenu={toggleDropMenu}
              />
            </>
          )))
          : (<div>
              {/* Ello */}
            </div>)
        }
      </div>

      {/* Send Message */}
      <form
        onSubmit={handleMessageSubmit}
      >
        { replyValue && (
          <div className="temporary-message-container">
            <div className="temporary-message-div">
              {replyValue}
            </div>
            <RiCloseLine
              size={24}
              style={{margin: '4px'}}
              color={'#ccc'}
              cursor='pointer'
              onClick={() => setReplyValue()}
            />
          </div>
        )}
        <textarea
          type="text"
          className="message-input"
          ref={messageRef}
          onChange={e => setChatMessage(e.target.value)}
          // onKeyDown={handleMessageSubmit}
        />
        { !chatMessage
          ? (
            null
          )
          : (
            <button
              className='message-button'
              type='submit'
              // type='button'
              // onClick={handleMessageSubmit}
              disabled={load}
            >
              Send
            </button>
          )
        }
      </form>
    </Container>
  )
}

export default NewMessageDiv
