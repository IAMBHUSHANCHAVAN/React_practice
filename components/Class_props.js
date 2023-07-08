import React, { Component } from 'react'
import '../App.css';
export default class Class_props extends Component {
  render() {
    return (
      <div>
        <h1 className='head'>this is a {this.props.brand} details for Class based props </h1>
      <p className='parachange'>the name of the brand is {this.props.brand}</p>
      <p className='parachange'>the name of the brand is {this.props.model}</p>
      <p className='parachange'>the name of the brand is {this.props.rating}</p>
    </div>
    )
  }
}
