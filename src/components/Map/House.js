import React, { PropTypes, Component } from 'react'
import CSSModules from 'react-css-modules'
import styles from './House.css'

export class House extends Component {
  constructor(props) {
    super(props)
  }

  _doStuff () {

  }

  render() {
    return (
       <div styleName="house">
       </div>
    )
  }
}

House.propTypes = {
  text: PropTypes.string
}

export default CSSModules(House, styles)
