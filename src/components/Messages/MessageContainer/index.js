import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { format } from 'date-fns';
import {
  // ptBR,
  enUS
} from 'date-fns/locale';
import 'firebase/firestore'
// -----------------------------------------------------------------------------
import { Container } from './styles'
import api from '~/services/api';
import firebase from '~/services/firebase'
import EmptyContainer from '~/components/_EmptyContainer'
import MessageDiv from '../MessageDiv'
import MessageList from '../MessageList'
import NewMessageDiv from '../NewMessageDiv';
// import message from '../../../store/modules/task/reducer';
// -----------------------------------------------------------------------------
export default function MessageContainer() {
  const user_id = useSelector(state => state.user.profile.id);
  const [chatMessages, setChatMessages] = useState();
  const [contact, setContact] = useState('');
  const [defaultFollowers, setDefaultFollowers] = useState([]);
  const [defaultFollowing, setDefaultFollowing] = useState([]);
  const [defaultMessages, setDefaultMessages] = useState([]);
  const [following, setFollowing] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [forwardValue, setForwardValue] = useState();
  const [listState, setListState] = useState(0);
  const [message, setMessage] = useState();
  const [messages, setMessages] = useState([]);
  const [oldChatId, setOldChatId] = useState(null);
  const [selectedContactId, setSelectedContactId] = useState();
  const [selectedMessageId, setSelectedMessageId] = useState();
  const [toggleContainer, setToggleContainer] = useState(1);

  const formattedMessageDate = fdate =>
  fdate == null
    ? ''
    : format(fdate, "MMM'/'dd'/'yyyy HH:mm", { locale: enUS });

  useEffect(() => {
    loadMessages()
  }, []);

  async function loadMessages() {
    const messagesResponse = await api.get(`messages/${user_id}`)
    setMessages(messagesResponse.data)
    setDefaultMessages(messagesResponse.data)
  }

  async function loadFollowing(input) {
    const response = await api.get(`users/${user_id}/following`, {
    })

    setFollowing(response.data);
    setDefaultFollowing(response.data);
  }

  async function loadFollowers(input) {
    const response = await api.get(`workers/${user_id}/followed`, {
    })
    // console.log(response.data.worker_name)
    setFollowers(response.data);
    setDefaultFollowers(response.data);
  }

  const firestore = firebase.firestore()

  async function handleMessageSelect(m) {
    // setMessageSelect(m.id)
    setMessage(m)
    setSelectedMessageId(m.id)
    // console.log(m)

    if (forwardValue) {
      const message_id = Math.floor(Math.random() * 1000000)

      await firestore.collection(`messages/chat/${message.chat_id}`).add({
        id: message_id,
        message: forwardValue,
        sender: "user",
        user_read: true,
        worker_read: false,
        timestamp: formattedMessageDate(new Date()),
        forward_message: true,
        visible: true,
      createdAt: new Date(),
      })
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch((error) => {
        console.log("Error writing document: ", error);
      });

      setForwardValue();
    }
    setToggleContainer(2)
  }

  async function handleContactSelect(c) {
    setChatMessages(null)
    setOldChatId()
    setContact(c)
    setSelectedContactId(c.id)
    loadMessages()

    const workerTest = await messages.find(m => m.worker_id === c.id)
    const userTest = await messages.find(m => m.user_id === c.id)
    // console.log(workerTest)
    // console.log(userTest)

    if (workerTest) {
      if (workerTest.user_id !== user_id) {
        // console.log("Not a chat with yourself")
        setMessage()
      }
      else {
        setMessage(workerTest)
      }
      return
    }
    else if (userTest) {
      if (userTest.worker_id === user_id) {
        // console.log('No message for user02')
        setMessage(userTest)
        return
      }
      setMessage()
    }
    else {
      setMessage()
      // console.log("No chat yet")
    }
    setToggleContainer(2)
  }
  // ---------------------------------------------------------------------------
  return (
    <Container toggleContainer={toggleContainer}>
      <MessageList
        defaultFollowers={defaultFollowers}
        defaultFollowing={defaultFollowing}
        defaultMessages={defaultMessages}

        followers={followers}
        following={following}

        handleContactSelect={handleContactSelect}
        handleMessageSelect={handleMessageSelect}

        listState={listState}
        loadFollowers={loadFollowers}
        loadFollowing={loadFollowing}

        messages={messages}

        setContact={setContact}
        setFollowers={setFollowers}
        setFollowing={setFollowing}
        setListState={setListState}
        setMessage={setMessage}
        setMessages={setMessages}
        selectedContactId={selectedContactId}
        selectedMessageId={selectedMessageId}
        setSelectedContactId={setSelectedContactId}
        setSelectedMessageId={setSelectedMessageId}
        toggleContainer={toggleContainer}
      />
      { message
        ? (
          <MessageDiv
            key={message.id}
            loadFollowers={loadFollowers}
            loadFollowing={loadFollowing}
            loadMessages={loadMessages}
            message={message}
            messages={messages}
            setForwardValue={setForwardValue}
            setToggleContainer={setToggleContainer}
            toggleContainer={toggleContainer}
          />
        )
        : (
          <>
            { contact && message
              ? (
                <MessageDiv
                  loadFollowers={loadFollowers}
                  loadFollowing={loadFollowing}
                  loadMessages={loadMessages}
                  message={message}
                  setForwardValue={setForwardValue}
                  setToggleContainer={setToggleContainer}
                  toggleContainer={toggleContainer}
                />
              )
              : (
                <>
                  { contact && !message
                    ? (
                      <NewMessageDiv
                        chatMessages={chatMessages}

                        loadFollowers={loadFollowers}
                        loadFollowing={loadFollowing}
                        loadMessages={loadMessages}

                        message={message}
                        newWorkerData={contact}
                        oldChatId={oldChatId}

                        setChatMessages={setChatMessages}
                        setForwardValue={setForwardValue}
                        setOldChatId={setOldChatId}
                        setToggleContainer={setToggleContainer}
                        toggleContainer={toggleContainer}
                      />
                    )
                    : (
                      <EmptyContainer/>
                    )
                  }
                </>
              )
            }
          </>
        )
      }
    </Container>
  )
}
