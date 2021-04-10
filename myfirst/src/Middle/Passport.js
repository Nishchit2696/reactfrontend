import React, { Component } from 'react'
import axios from 'axios';
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBBtn } from "mdbreact";
import { Form, Col, Button } from "react-bootstrap";
const UserRoutes="http://localhost:3000/passport_insert"
class Passport extends Component{
  state={
    Firstname:"",
    Lastname:"",
    Fathername:"",
    CitizenshipNo:"",
    Ocupation:"",
    Education:"",
    Phonenumber:""

  }
  sendUserData=(e)=>{
  e.preventDefault();
  const data ={
    Firstname:this.state.Firstname,
    Lastname:this.state.Lastname,
    Fathername:this.state.Fathername,
    CitizenshipNo:this.state.CitizenshipNo,
    Ocupation:this.state.Ocupation,
    Education:this.state.Education,
    Phonenumber:this.state.Phonenumber,
  }
  axios.post(UserRoutes+"signup",data)
  .then()
  .catch()
}
    render(){
        return(
            <div>
            <MDBFooter color="blue" className="font-big pt- mt-4">
          <MDBContainer fluid className="text-center text-md-left">
<MDBRow>
  <MDBCol md="6">
   <img src="../Image/passport.jpg" md="6" className="passimg"/>
  </MDBCol>
  <MDBCol md="6">
  <div className="card col-12 col-lg-10 login-card mt-5 hv-right" >
  <form>
        <p className="h4 text-center mb-4 black-text">Passport Form</p>
        <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
          First Name
        </label>
        <input type="text" value={this.state.Firstname} onchange={(event)=>{this.setState({Firstname: event.target.value})}} id="inputFirstname" className="form-control" />
        <br />
        <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
          Last Name
        </label>
        <input type="text" value={this.state.Lastname} onchange={(event)=>{this.setState({Lastname: event.target.value})}} id="defaultFormRegisterEmailEx" className="form-control" />
        <br />
        <label htmlFor="defaultFormRegisterConfirmEx" className="grey-text">
          Father Name
        </label>
        <input type="text" id="defaultFormRegisterConfirmEx" className="form-control" />
        <br />
         <label htmlFor="defaultFormRegisterPasswordEx" className="grey-text">
          Citizenship No.
        </label>
        <br />
        <input type="text" id="defaultFormRegisterPasswordEx" className="form-control" />
        <br />
         <label htmlFor="defaultFormRegisterPasswordEx" className="grey-text">
         Occupation
        </label>
        <br />
        <input type="password" id="defaultFormRegisterPasswordEx" className="form-control" />
        <br />
         <label htmlFor="defaultFormRegisterPasswordEx" className="grey-text">
         Education
        </label>
        <br />
        <input type="password" id="defaultFormRegisterPasswordEx" className="form-control" />
        <br />
         <label htmlFor="defaultFormRegisterPasswordEx" className="grey-text">
         Phone Number
        </label>
        <br />
        <input type="password" id="defaultFormRegisterPasswordEx" className="form-control" />
        <div className="text-center mt-4">
          <MDBBtn color="unique" type="submit">
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
export default Passport;