import React, { Component, Fragment } from 'react'
import { Accordion, Button } from 'react-bootstrap';
import { LoggedInPrayerForm, NotLoggedInPrayerForm, } from './form';

export default class PrayerTogglew extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <Accordion defaultActiveKey='0'>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            Open 
          </Accordion.Toggle>
          <Accordion.Collapse eventKey='0'>
            <LoggedInPrayerForm/>
          </Accordion.Collapse>
        </Accordion>

      <hr />

        <Accordion defaultActiveKey='0'>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            Open 
          </Accordion.Toggle>
          <Accordion.Collapse eventKey='0'>
            <NotLoggedInPrayerForm/>
          </Accordion.Collapse>
        </Accordion>
      </Fragment>
    )
  }

}