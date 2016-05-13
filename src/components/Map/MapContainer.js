import React, { Component } from 'react'
import AltContainer from 'alt-container'
import ListingsStore from '../../store/ListingsStore'
import ListingsActions from '../../actions/ListingsActions'
import Map from './Map.js'

export class MapContainer extends Component {
  componentDidMount () {
    ListingsActions.get()
  }

  render () {
    return (
      <AltContainer store={ListingsStore}>
        <Map {...this.props} />
      </AltContainer>
    )
  }
}

export default MapContainer
