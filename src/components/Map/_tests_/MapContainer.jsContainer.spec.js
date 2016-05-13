import React from 'react'
import MapContainer.jsContainer from '../MapContainer.jsContainer'

describe('MapContainer.jsContainer', () => {
  let component
  let instance

  beforeEach(() => {
    component = shallow(
      <MapContainer.jsContainer test="test" />
    )

    instance = component.instance()
  })

  it('should render', () => {
    expect(component.type().name).to.eql('AltContainer')
  })

  it('should add the correct store', () => {
    expect(component.prop('store').displayName).to.eql('ListingsStoreStore')
  })

  it('should render the component with props', () => {
    const MapContainer.js = component.find('MapContainer.js')

    expect(MapContainer.js).to.have.prop('test', 'test')
  })
})
