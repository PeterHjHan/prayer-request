import React, { Component } from 'react'
import { Accordion, Button } from 'react-bootstrap';
import { LoggedInPrayerForm, NotLoggedInPrayerForm } from './form';
import { useAuth0 } from "../react-auth0-spa";  

const PrayerToggle = () => {
  const { loading, isAuthenticated, loginWithRedirect } = useAuth0();

  return (
    <Accordion defaultActiveKey='0'>
    <Accordion.Toggle as={Button} variant="link" eventKey="0">
      Open 
    </Accordion.Toggle>
    <Accordion.Collapse eventKey='0'>
      {/* {isAuthenticated ? <LoggedInPrayerForm/> : <NotLoggedInPrayerForm/>} */}
      <LoggedInPrayerForm />
      
    </Accordion.Collapse>
  </Accordion>
  )
}

export default PrayerToggle;