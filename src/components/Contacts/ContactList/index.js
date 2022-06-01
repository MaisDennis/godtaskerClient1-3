import React, { useState } from 'react'
//------------------------------------------------------------------------------
import { Container } from './styles'
import Contact from '../Contact'
import Searchbar from '~/components/Searchbar';
//------------------------------------------------------------------------------
export default function ContactList({
  contacts,
  defaultContacts,
  handleContactSelect,
  selectedContactId,
  setContacts,
  toggleContainer,
}) {
  const [inputState, setInputState] = useState('');

  const handleUpdateInput = async (input) => {
    const filteredList = defaultContacts.filter(c => {
      let workerName = c.worker_name + c.first_name + c.last_name
      return workerName.toLowerCase().includes(input.toLowerCase())
    })
    setContacts(filteredList)
    setInputState(input)
  }
  //----------------------------------------------------------------------------
  return (
    <Container toggleContainer={toggleContainer}>
      <header className='contact-header'>
        <div className='list-header-div'>
          <Searchbar
            className="header-input"
            input={inputState}
            onChange={handleUpdateInput}
            placeholder="Search Contact"
          />
        </div>
      </header>

      {/* contacts */}
      <ul className='contact-list'>
        { contacts.map((c) => (
          <Contact
            key={c.id}
            contact={c}
            handleContactSelect={handleContactSelect}
            selectedContactId={selectedContactId}
          />
        ))}
      </ul>
    </Container>
  )
}
