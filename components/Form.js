import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props){
        super(props)
        this.state={
            CompanyName : "",
            CompanyEmail:"",
            CompanyPhone  : "",
            CompanyAdress : ""
        }
    }
    changeText(e){
        this.setState({
            CompanyName : e.target.value,
            // CompanyEmail : e.target.value,
            // CompanyPhone : e.target.value,
            // CompanyAdress : e.target.value
        })
    }
    ChangeEmail(e){
        this.setState({
            CompanyEmail: e.target.value
        })
    }
    changePhone(e){
        this.setState({
            CompanyPhone: e.target.value
        })
    }
    changeAddress(e){
        this.setState({
            CompanyAdress: e.target.value
        })
    }
  render() {
    return (
      <div>
        <label htmlFor="name">enter copany name </label>
        <input type="text" name="" id="CompanyName" 
        onChange={this.changeText.bind(this)}
        />
        <label htmlFor="name">enter company email </label>
        <input type='email' name="" id="CompanyEmail" 
        onChange={this.ChangeEmail.bind(this)}
        />
        <label htmlFor="name">enter company phone no  </label>
        <input type="number" name="" id="CompanyPhone" 
        onChange={this.changePhone.bind(this)}
        />
        <label htmlFor="name">enter company address </label>
        <input type="text" name="" id="CompanyAdress" 
        onChange={this.changeAddress.bind(this)}
        />

        <h2>detail of your company are below</h2>
        <p>company name - {this.state.CompanyName} </p>
        <p>company name - {this.state.CompanyEmail} </p>
        <p>company name - {this.state.CompanyPhone} </p>
        <p>company name - {this.state.CompanyAdress} </p>
      </div>
    )
  }
}
