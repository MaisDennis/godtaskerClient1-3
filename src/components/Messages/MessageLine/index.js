import React, {
  useState,
  // useRef,
  useEffect,
} from 'react'
import { useSelector } from 'react-redux';
// -----------------------------------------------------------------------------
import { Container } from './styles';
import insert from '~/assets/insert_photo-24px.svg';
import firebase from '~/services/firebase'
// import api from '~/services/api';
// -----------------------------------------------------------------------------
function MessageLine({
  handleMessageSelect, m, selectedMessageId,
}) {
  const user_id = useSelector(state => state.user.profile.id);

  const [messageBell, setMessageBell] = useState();
  const [lastMessage, setLastMessage] = useState();
  const [lastMessageTime, setLastMessageTime] = useState();

  const userIsWorker = user_id === m.worker_id;

  useEffect(() => {
    getMessages()
  })

  const firestore = firebase.firestore()
  const messagesRef = firestore
  .collection(`messages/chat/${m.chat_id}`)

  async function getMessages() {
    const unsubscribe = messagesRef
      .orderBy('createdAt')
      .onSnapshot((querySnapshot) => {
        const data = querySnapshot.docs.map(d => ({
          ...d.data(),
        }));
        setMessageBell(data)
        let messagesLength = data.length

        const last_message = data[0]
          ? data[messagesLength-1].message
          : null
        setLastMessage(last_message)

        const last_message_time = data[0]
          ? data[messagesLength-1].timestamp
          : null
        setLastMessageTime(last_message_time)
        // lastMessageRef.current.scrollToEnd({ animated: false })
      })
      return unsubscribe;
  }
  // ---------------------------------------------------------------------------

  return (
    <Container>
      { selectedMessageId === m.id
        ? (
          <div
            className="line-div selected"
            onClick={() => handleMessageSelect(m)}
          >
            <div className="left-div">
              { userIsWorker === false
                ? (
                  <div className="image-logo-div">
                    { m.worker === null || m.worker === undefined
                    || m.worker.avatar === null || m.worker.avatar === undefined
                      ? (
                        <img
                          className="image-logo"
                          src={insert}
                          alt="Worker"
                        />
                      )
                      : (
                        <img
                          className="image-logo"
                          src={m.worker.avatar.url}
                          alt="Worker"
                        />
                      )
                    }
                  </div>
                )
                : (
                  <div className="image-logo-div">
                    { m.user === null || m.user === undefined || m.user.avatar === null || m.worker.avatar === undefined
                      ? (
                        <img
                          className="image-logo"
                          src={insert}
                          alt="Worker"
                        />
                      )
                      : (
                        <img
                          className="image-logo"
                          src={m.user.avatar.url}
                          alt="Worker"
                        />
                      )
                    }
                  </div>
                )
              }
            </div>

            <div className="center-div">
              <div className="worker-div">
                { userIsWorker === false
                  ? (
                    <label className="worker-label">
                      {m.worker.worker_name}
                    </label>
                  )
                  : (
                    <label className="worker-label">
                      {m.user.user_name}
                    </label>
                  )
                }
              </div>

              {/* Last Message */}
              <div className="last-time-div">
                <label className="last-time-label">{lastMessageTime}</label>
              </div>
              <div className="last-message-div">
                <label className="last-message-label">{lastMessage}</label>
              </div>
            </div>
          </div>
        )
        : (
          <div
          className="line-div"
          onClick={() => handleMessageSelect(m)}
          >
            <div className="left-div">
              { userIsWorker === false
                ? (
                  <div className="image-logo-div">
                    { m.worker === null || m.worker === undefined || m.worker.avatar === null || m.worker.avatar === undefined
                      ? (
                        <img
                          className="image-logo"
                          src={insert}
                          alt="Worker"
                        />
                      )
                      : (
                        <img
                          className="image-logo"
                          src={m.worker.avatar.url}
                          alt="Worker"
                        />
                      )
                    }
                  </div>
                )
                : (
                  <div className="image-logo-div">
                    { m.user === null || m.user === undefined || m.user.avatar === null || m.worker.avatar === undefined
                      ? (
                        <img
                          className="image-logo"
                          src={insert}
                          alt="Worker"
                        />
                      )
                      : (
                        <img
                          className="image-logo"
                          src={m.user.avatar.url}
                          alt="Worker"
                        />
                      )
                    }
                  </div>
                )
              }
            </div>

            <div className="center-div">
              <div className="worker-div">
                { userIsWorker === false
                  ? (
                    <label className="worker-label">
                      {m.worker.worker_name}
                    </label>
                  )
                  : (
                    <label className="worker-label">
                      {m.user.user_name}
                    </label>
                  )
                }
              </div>
              {/* Last Message */}
              <div className="last-time-div">
                <label className="last-time-label">{lastMessageTime}</label>
              </div>
              <div className="last-message-div">
                <label className="last-message-label">{lastMessage}</label>
              </div>
            </div>
          </div>
        )
      }
    </Container>
  );
}

export default MessageLine;
