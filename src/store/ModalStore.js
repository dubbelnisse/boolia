import alt from '../alt'
import ModalActions from '../actions/ModalActions'

class ModalStore {
  constructor () {
    this.bindListeners({
      open: ModalActions.open,
      close: ModalActions.close,
      activeListing: ModalActions.activeListing
    })

    this.open = false
    this.activeListing = {}
  }

  open () {
    this.open = true
  }

  close () {
    this.open = false
  }

  activeListing (listing) {
    console.log(listing)
    this.open = true
    this.activeListing = listing
  }
}

export default alt.createStore(ModalStore, 'ModalStore')
