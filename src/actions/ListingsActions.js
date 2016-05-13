import alt from '../alt'
import { get } from '../core/HttpClient'

class ListingsActions {
  get () {
    return (dispatch) => {
      get('/listings')
        .then(data => dispatch(data.listings))
    }
  }
}

export default alt.createActions(ListingsActions)
