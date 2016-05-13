import React from 'react'
import AltContainer from 'alt-container'
import ModalStore from '../../store/ModalStore'
import Modal from './Modal.js'

const ModalContainer = (props) =>
  <AltContainer store={ModalStore}>
    <Modal {...props} />
  </AltContainer>

export default ModalContainer
