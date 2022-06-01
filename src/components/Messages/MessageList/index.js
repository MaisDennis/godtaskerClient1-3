import React, {
  useState,
  // useEffect, useMemo, useCallback, useRef
} from 'react'
// import { useSelector } from 'react-redux'
import Button from '../../Buttons'
// import 'firebase/firestore'
// import 'firebase/auth'
//------------------------------------------------------------------------------
import Searchbar from '~/components/Searchbar';
import { Container } from './styles'
import MessageLine from '../MessageLine'
import Contact from '~/components/Contacts/Contact'
//------------------------------------------------------------------------------

function MessageList({
  defaultFollowers, defaultFollowing, defaultMessages,
  followers, following,
  handleContactSelect, handleMessageSelect,
  listState, loadFollowers, loadFollowing,
  messages,
  selectedContactId, selectedMessageId,
  setContact, setFollowers, setFollowing,
  setListState, setMessage, setMessages,
  setSelectedContactId, setSelectedMessageId,
  toggleContainer,
}) {
  const [inputState, setInputState] = useState('');
  console.log(defaultMessages)

  const handleUpdateInput = async (input) => {
    if (listState === 0) {
      const filteredList = defaultMessages.filter(t => {
        let workerName = t.worker.worker_name + t.worker.first_name + t.worker.last_name +
          t.user.user_name + t.user.first_name + t.user.last_name
        return workerName.toLowerCase().includes(input.toLowerCase())
      })
      setMessages(filteredList)
      setInputState(input)
      return
    }
    if (listState === 1) {
      const filteredList = defaultFollowing.filter(t => {
        let workerName = t.user_name + t.first_name + t.last_name
        return workerName.toLowerCase().includes(input.toLowerCase())
      })
      setFollowing(filteredList)
      setInputState(input)
      return
    }
    if (listState === 2) {
      const filteredList = defaultFollowers.filter(t => {
        let workerName = t.user_name + t.first_name + t.last_name
        return workerName.toLowerCase().includes(input.toLowerCase())
      })
      setFollowers(filteredList)
      setInputState(input)
      return
    }
  }

  function handleListState(number) {
    loadFollowers('');
    loadFollowing('');
    setContact(null)
    setListState(number);
    setMessage(null)
    setSelectedMessageId(null)
    setSelectedContactId(null)
  }
  //----------------------------------------------------------------------------
  return (
    <Container toggleContainer={toggleContainer}>
      <header className='message-header'>
        <div className="list-header-title-div">

          {/* header */}
          <ul className="list-header-button-ul">
            { listState === 0
              ? (
                <li><Button
                  type="04"
                  onClick={() => handleListState(0)}
                >Active</Button></li>
              )
              : (
                <li><Button
                  type="05"
                  className="list-header-button"
                  onClick={() => handleListState(0)}
                >Active</Button></li>
              )
            }
            {
              listState === 1
              ? (
                <li><Button
                  type="04"
                  onClick={() => handleListState(1)}
                >Following</Button></li>
              )
              : (
                <li><Button
                  type="05"
                  onClick={() => handleListState(1)}
                >Following</Button></li>
              )
            }
                        {
              listState === 2
              ? (
                <li><Button
                  type="04"
                  onClick={() => handleListState(2)}
                >Followed</Button></li>
              )
              : (
                <li><Button
                  type="05"
                  onClick={() => handleListState(2)}
                >Followed</Button></li>
              )
            }
          </ul>
        </div>

        <div className='list-header-div'>
          <Searchbar
            className="header-input"
            input={inputState}
            onChange={handleUpdateInput}
            placeholder="Search Message"
          />
        </div>
      </header>

      {/* messages */}
      { listState === 0
        && (
          <ul className='message-list'>
            { messages.map((m) =>
              <MessageLine
                key={m.id}
                handleMessageSelect={handleMessageSelect}
                m={m}
                selectedMessageId={selectedMessageId}
              />
            )}
          </ul>
        )
      }
      { listState === 1
        && (
          <ul className='contact-list'>
            { following.map((f) =>
              <Contact
                key={f.id}
                contact={f}
                handleContactSelect={handleContactSelect}
                selectedContactId={selectedContactId}
              />
            )}
          </ul>
        )

      }
      { listState === 2
        && (
          <ul className='contact-list'>
            { followers.map((f) =>
              <Contact
                key={f.id}
                contact={f}
                handleContactSelect={handleContactSelect}
                selectedContactId={selectedContactId}
              />
            )}
          </ul>
        )
      }

    </Container>
  )
}

export default MessageList
