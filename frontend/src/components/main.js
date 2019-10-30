import React, { Component, Fragment } from 'react'
import NavBar from './nav'
import PrayerToggle from './post-prayer';

export default class Main extends Component {

  render() {
    return (
      <Fragment>
        <NavBar />
        <PrayerToggle />
      </Fragment>
    )
  }
}
