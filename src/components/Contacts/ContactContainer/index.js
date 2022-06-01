import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
// -----------------------------------------------------------------------------
import { Container } from './styles';
import ContactList from '../ContactList'
import ContactProfile from '../ContactProfile'
import EmptyContainer from '~/components/_EmptyContainer'
import api from '~/services/api';
// -----------------------------------------------------------------------------
export default function ContactContainer() {
  const user_id = useSelector(state => state.user.profile.id);

  const [ contact, setContact ] = useState('');
  const [ contacts, setContacts ] = useState([]);
  const [countFollowers, setCountFollowers] = useState();
  const [countFollowing, setCountFollowing] = useState();
  const [defaultContacts, setDefaultContacts] = useState([]);
  const [followIndividual, setFollowIndividual] = useState();
  const [followButtonTrigger, setFollowButtonTrigger] = useState();
  const [selectedContactId, setSelectedContactedId] = useState();
  const [toggleContainer, setToggleContainer] = useState(1);

  useEffect(() => {
    loadWorkers('');
  },[]);

  async function loadWorkers(input) {
    const response = await api.get(`workers`, {
      params: {
        nameFilter: `${input}`,
      }
    })
    setContacts(response.data);
    setDefaultContacts(response.data);
  }

  async function handleContactSelect(c) {
    setContact(c)
    setSelectedContactedId(c.id)

    const followedResponse = await api.get(
      `/workers/${c.id}/followed/count`
    )

    const followIndividualResponse = await api.get(
      `/users/following/individual`, {
        params: { user_id: user_id, worker_id: c.id }
      }
    )

    setCountFollowers(followedResponse.data)
    setFollowIndividual(followIndividualResponse.data[0])
    setFollowButtonTrigger(!followButtonTrigger)
    setToggleContainer(2)
  }
  // ---------------------------------------------------------------------------
  return (
    <Container toggleContainer={toggleContainer}>
      <ContactList
        contacts={contacts}
        defaultContacts={defaultContacts}
        handleContactSelect={handleContactSelect}
        selectedContactId={selectedContactId}
        setContacts={setContacts}
        toggleContainer={toggleContainer}
      />
    { contact
      ? (
        <ContactProfile
          contact={contact}
          countFollowers={countFollowers}
          countFollowing={countFollowing}
          followButtonTrigger={followButtonTrigger}
          followIndividual={followIndividual}
          setCountFollowers={setCountFollowers}
          setCountFollowing={setCountFollowing}
          setFollowButtonTrigger={setFollowButtonTrigger}
          setFollowIndividual={setFollowIndividual}
          setToggleContainer={setToggleContainer}
          toggleContainer={toggleContainer}
        />
      )
      : (
        <EmptyContainer/>
      )
    }
    </Container>
  )
}
