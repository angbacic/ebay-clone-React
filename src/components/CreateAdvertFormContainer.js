import React from 'react'
import {connect} from 'react-redux'
import {createAdvert} from '../actions/adverts'
import AdvertForm from './AdvertForm'

class CreateAdvertFormContainer extends React.Component {
  state = {
    title: '',
    description: '',
    picture: '',
    price:'',
    email:'',
    phoneNumber:''
  }

  onChange = (advert) => {
    this.setState({
      [advert.target.name]: advert.target.value
    })
  }

  onSubmit = (advert) => {
    advert.preventDefault()
    this.setState({
      title: '',
      description: '',
      picture: '',
      price:'',
      email:'',
      phoneNumber:''
    })
    this.props.createAdvert(this.state)
  }

  render() {
    return (<AdvertForm
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      values={this.state}
    />)
  }
}

export default connect(null, {createAdvert})(CreateAdvertFormContainer)