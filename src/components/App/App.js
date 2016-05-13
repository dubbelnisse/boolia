import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import styles from './App.css'
import MapContainer from '../Map/MapContainer'

class App extends Component {
  _test () {

  }

  render () {
    return (
      <div className="container">
        <MapContainer />
      </div>
    )
  }
}

export default CSSModules(App, styles)
