import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import styles from './App.css'

class App extends Component {
  _test () {

  }

  render () {
    return (
      <div className="container">
        <p>boolia</p>
      </div>
    )
  }
}

export default CSSModules(App, styles)
