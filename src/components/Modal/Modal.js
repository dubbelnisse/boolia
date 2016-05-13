import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './Modal.css'
import ModalActions from '../../actions/ModalActions'

export class Modal extends Component {
  constructor(props) {
    super(props)
  }

  _close () {
    ModalActions.close()
  }

  render() {
    const {
      activeListing,
      open
    } = this.props

    if (!open) { return null }

    return (
       <div styleName="modal">
         <a href={activeListing.url}>Url</a>
       </div>
    )
  }
}

Modal.propTypes = {
  activeListing: PropTypes.shape({
    url: PropTypes.string
  }),
  open: PropTypes.bool
}

export default CSSModules(Modal, styles)
