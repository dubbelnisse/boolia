import alt from '../alt'

class ModalActions {
  constructor () {
    this.generateActions(
      'open',
      'close'
    )
  }

  activeListing (listing) {
    return (dispatch) => {
      dispatch(listing)
    }
  }
}

export default alt.createActions(ModalActions)
