import React from 'react'
import { Map } from '../Map'

describe('Map', () => {
  let component
  let instance

  beforeEach(() => {
    component = shallow(
      <Map />
    )

    instance = component.instance()
  })

  it('should render', () => {
    expect(component.type()).to.eql('div')
  })
})
