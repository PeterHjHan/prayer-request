import React, { Component, Fragment } from 'react'
import PrayerToggle from './post-prayer';

export default class Main extends Component {

  render() {
    return (
      <Fragment>
        <div className='container'>
        <PrayerToggle />
        </div>
      </Fragment>
    )
  }
}
