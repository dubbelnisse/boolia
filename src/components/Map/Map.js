import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './Map.css'
import GoogleMap from 'google-map-react'
import House from './House'

export class Map extends Component {
  _renderHouses () {
    const {
      houses
    } = this.props

    return houses.map((house, i) => {
      return (
        <House
          key={i}
          lat={house.location.position.latitude}
          lng={house.location.position.longitude} />
      )
    })
  }

  render () {
    return (
      <div styleName="map">
        <GoogleMap
          bootstrapURLKeys={{ key: 'AIzaSyBYtQI2qOqzrIAwI8C3HwQAwSgEvNok0p8' }}
          defaultCenter={{ lat: 59.36728, lng: 17.97929 }}
          defaultZoom={9}>
          {this._renderHouses()}
        </GoogleMap>
      </div>
    )
  }
}

Map.propTypes = {
  houses: PropTypes.arrayOf(PropTypes.shape({}))
}

export default CSSModules(Map, styles)
