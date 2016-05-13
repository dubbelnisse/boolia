import React, { PropTypes, Component } from 'react'
import CSSModules from 'react-css-modules'
import styles from './House.css'
import ModalActions from '../../actions/ModalActions'

export class House extends Component {
  constructor(props) {
    super(props)

    this._moreInfo = this._moreInfo.bind(this)
  }

  _moreInfo () {
    ModalActions.activeListing(this.props.listing)
  }

  render() {
    return (
       <div onClick={this._moreInfo} styleName="house">
         <i className="fa fa-home"></i>
       </div>
    )
  }
}

House.propTypes = {
  listing: PropTypes.shape({})
}

export default CSSModules(House, styles)
