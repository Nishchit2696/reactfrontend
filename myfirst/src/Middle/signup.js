import React, { Component } from 'react'
import axios from 'axios';
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBBtn } from "mdbreact";
import { Form, Col, Button } from "react-bootstrap";
class signup extends Component{
  state={
    Firstname:"",
    Lastname:"",
    Email:"",
    Citizenship:"",
    Phonenumber:"",
    Password:""

  }
  sendUserData=(e)=>{
  e.preventDefault();
  const data ={
    Firstname:this.state.Firstname,
    Lastname:this.state.Lastname,
    Email:this.state.Email,
    Citizenship:this.state.Citizenship,
    Phonenumber:this.state.Phonenumber,
    Password:this.state.Password
  }
  axios.post("http://localhost:90/User_insert", this.state)
  .then((response)=>{
    console.log(response)
    window.alert("Sing up successful")
    window.location.href = "/"
  })
  .catch(err => {
    console.log(err);
  })
}
    render(){
        return(
            <div>
            <MDBFooter color="blue" className="font-big pt- mt-4">
          <MDBContainer fluid className="text-center text-md-left">
<MDBRow>
  <MDBCol md="6">
   <img src="../Image/img2.jpg" md="6" className="img"/>
  </MDBCol>
  <MDBCol md="6">
  <div className="card col-12 col-lg-10 login-card mt-5 hv-right" >
  <form onSubmit={this.sendUserData}>
        <p className="h4 text-center mb-4 black-text">Sign up</p>
        <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
          First Name
        </label>
        <input type="text" value={this.state.Firstname} onChange={(event)=>{this.setState({Firstname: event.target.value})}} id="defaultFormRegisterNameEx" className="form-control" />
        <br />
        <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
          Last Name
        </label>
        <input type="text" value={this.state.Lastname} onChange={(event)=>{this.setState({Lastname: event.target.value})}} id="defaultFormRegisterEmailEx" className="form-control" />
        <br />
        <label htmlFor="defaultFormRegisterConfirmEx" className="grey-text">
          Email
        </label>
        <input type="email" name="Email" value={this.state.Email} onChange={(event)=>{this.setState({Email: event.target.value})}} id="defaultFormRegisterConfirmEx" className="form-control" />
        <br />
         <label htmlFor="defaultFormRegisterPasswordEx" className="grey-text">
          Citizenship No.
        </label>
        <br />
        <input type="text" value={this.state.Citizenship} onChange={(event)=>{this.setState({Citizenship: event.target.value})}} id="defaultFormRegisterPasswordEx" className="form-control" />
        <br />
         <label htmlFor="defaultFormRegisterPasswordEx" className="grey-text">
         Phone Number
        </label>
        <br />
        <input type="text" value={this.state.Phonenumber} onChange={(event)=>{this.setState({Phonenumber: event.target.value})}} id="defaultFormRegisterPasswordEx" className="form-control" />
        <br />
         <label htmlFor="defaultFormRegisterPasswordEx" className="grey-text">
          Your password
        </label>
        <br />
        <input type="password" value={this.state.Password} onChange={(event)=>{this.setState({Password: event.target.value})}} id="defaultFormRegisterPasswordEx" className="form-control" />
        <div className="text-center mt-4">
          <MDBBtn color="unique" type="submit" >
            Register
          </MDBBtn>
        </div>
      </form>
    </div>
  </MDBCol>
</MDBRow>
</MDBContainer>
</MDBFooter>
        </div>
        );
      }
           

}
export default signup;