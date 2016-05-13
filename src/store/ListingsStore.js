import alt from '../alt'
import ListingsActions from '../actions/ListingsActions'

class ListingsStore {
  constructor () {
    this.bindListeners({
      get: ListingsActions.get
    })

    this.houses = []
  }

  get (houses) {
    this.houses = houses
  }
}

export default alt.createStore(ListingsStore, 'ListingsStore')
