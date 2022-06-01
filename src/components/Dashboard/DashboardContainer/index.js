import React, { useState } from 'react'
import { useSelector } from 'react-redux';
// -----------------------------------------------------------------------------
import { Container } from './styles'
import ContactProfile from '../../Contacts/ContactProfile'
import DashboardPanel from '../DashboardPanel'
import DashboardProfile from '../DashboardProfile'
import DashboardFollowing from '../DashboardFollowing'
import DashboardFollowers from '../DashboardFollowers'
// import EmptyContainer from '~/components/_EmptyContainer'
import api from '~/services/api';
// -----------------------------------------------------------------------------
export default function DashboardContainer() {
  const user_id = useSelector(state => state.user.profile.id);

  const [ contact, setContact ] = useState('');
  const [countFollowers, setCountFollowers] = useState();
  const [countFollowing, setCountFollowing] = useState();
  const [previousListState, setPreviousListState] = useState();
  const [followIndividual, setFollowIndividual] = useState();
  const [followButtonTrigger, setFollowButtonTrigger] = useState();
  const [listState, setListState] = useState(0);
  const [toggleContainer, setToggleContainer] = useState(1);

  async function handleContactSelect(c) {
    setContact(c)
    setPreviousListState(listState)
    setListState(3)

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
      <DashboardPanel
        setToggleContainer={setToggleContainer}
        toggleContainer={toggleContainer}
      />
      { listState === 0
        && (
          <DashboardProfile
            setListState={setListState}
            setToggleContainer={setToggleContainer}
            toggleContainer={toggleContainer}
        />
        )
      }
      { listState === 1
        && (
          <DashboardFollowing
            setListState={setListState}
            handleContactSelect={handleContactSelect}
          />
        )
      }
      { listState === 2
        && (
          <DashboardFollowers
            setListState={setListState}
            handleContactSelect={handleContactSelect}
          />
        )
      }
      { listState === 3
        && (
          <ContactProfile
            contact={contact}
            countFollowers={countFollowers}
            countFollowing={countFollowing}
            followButtonTrigger={followButtonTrigger}
            followIndividual={followIndividual}
            previousListState={previousListState}

            setCountFollowers={setCountFollowers}
            setCountFollowing={setCountFollowing}
            setFollowButtonTrigger={setFollowButtonTrigger}
            setFollowIndividual={setFollowIndividual}
            setListState={setListState}
          />
        )
      }
    </Container>
  )
}
