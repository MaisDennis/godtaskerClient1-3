import React, { useState, useEffect } from 'react';
import 'firebase/firestore'
// -----------------------------------------------------------------------------
import { Container } from './styles';
import ContactContainer from '~/components/Contacts/ContactContainer';
import DashboardContainer from '~/components/Dashboard/DashboardContainer';
// import Footer from '~/components/Footer';
import Header from '~/components/Header';
import MessageContainer from '~/components/Messages/MessageContainer'
import ReceivedTaskContainer from '~/components/TasksReceived/TaskContainer';
import TaskContainer from '~/components/Tasks/TaskContainer';
import TasksCreate from '~/components/TasksCreate';
// -----------------------------------------------------------------------------
export default function ListTasks() {
    // var devices = navigator.mediaDevices.getUserMedia({audio:true})
  const [ headerMenu, setHeaderMenu ] = useState(2);

  useEffect(() => {
    fetch('https://extreme-ip-lookup.com/json/')
    .then( res => res.json())
    .then(response => {
     console.log("Country is : ", response);
   })
   .catch((data, status) => {
     console.log('Request failed:', data);
   });
 },[])


  // ---------------------------------------------------------------------------
  return (
    <>
      <Header
        headerMenu={headerMenu}
        setHeaderMenu={setHeaderMenu}
      />

      <Container>
        <div className="container-div left" id="mobileMain">
          { headerMenu === 0 && (
            <TasksCreate
              setHeaderMenu={setHeaderMenu}
            />
          )}
          { headerMenu === 1 && (
            <TaskContainer
              setHeaderMenu={setHeaderMenu}
            />
          )}
          { headerMenu === 2 && (
            <ReceivedTaskContainer
              setHeaderMenu={setHeaderMenu}
            />
          )}
          { headerMenu === 3 && (<DashboardContainer/>)}
          { headerMenu === 5 && (<ContactContainer/>)}
        </div>

        <div className="container-div right" id="mobileMessage">
          <MessageContainer/>
        </div>
      </Container>

      {/* <Footer/> */}
    </>
  );
}
