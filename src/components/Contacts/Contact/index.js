import React, {
  // useState, useEffect
} from 'react';
// -----------------------------------------------------------------------------
import insert from '~/assets/insert_photo-24px.svg';
import { Container } from './styles';
// -----------------------------------------------------------------------------
export default function Contact({
  contact,
  handleContactSelect,
  selectedContactId,
}) {
  // ---------------------------------------------------------------------------
  return (
    <Container>
      { selectedContactId === contact.id
        ? (
          <div
          className="line-div selected"
          onClick={() => handleContactSelect(contact)}
          >
            <div className='left-div'>
              { contact === undefined || contact.avatar === null
                ?
                  <div className="image-logo-div">
                    <img
                      className="image-logo"
                      src={insert}
                      alt="Worker"
                    />
                  </div>
                :
                  <div className="image-logo-div">
                    <img
                      className="image-logo"
                      src={contact.avatar.url}
                      alt="Worker"
                    />
                  </div>
              }
            </div>
            <div className="center-div">
              { contact.worker_name !== undefined
                ? (
                  <label className="worker-label">{contact.worker_name}</label>
                )
                : (
                  <label className="worker-label">{contact.user_name}</label>
                )
              }

              <div className="name-div">
                <label className="short-label">{contact.first_name}</label>
                <label className="short-label">{contact.last_name}</label>
              </div>
              { contact.bio
                ? (
                  <label className="bio-label">{contact.bio}</label>
                )
                : (
                  <label className="bio-label">-</label>
                )

              }
              {/* <label className="bio-label">Followed by nina_ + 5 more</label> */}
            </div>
          </div>
        )
        : (
          <div
          className="line-div"
          onClick={() => handleContactSelect(contact)}
          >
            <div className='left-div'>
              { contact === undefined || contact.avatar === null
                ?
                  <div className="image-logo-div">
                    <img
                      className="image-logo"
                      src={insert}
                      alt="Worker"
                    />
                  </div>
                :
                  <div className="image-logo-div">
                    <img
                      className="image-logo"
                      src={contact.avatar.url}
                      alt="Worker"
                    />
                  </div>
              }
            </div>
            <div className="center-div">
              { contact.worker_name !== undefined
                ? (
                  <label className="worker-label">{contact.worker_name}</label>
                )
                : (
                  <label className="worker-label">{contact.user_name}</label>
                )
              }
              <div className="name-div">
                <label className="short-label">{contact.first_name}</label>
                <label className="short-label">{contact.last_name}</label>
              </div>
              { contact.bio
                ? (
                  <label className="bio-label">{contact.bio}</label>
                )
                : (
                  <label className="bio-label">-</label>
                )

              }
              {/* <label className="bio-label">Followed by nina_ + 5 more</label> */}
            </div>
          </div>
        )
      }
    </Container>
  )
}
