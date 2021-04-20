import React, { Component } from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBBtn } from "mdbreact";
import { Form, Col, Button } from "react-bootstrap";
import{Redirect, Link} from'react-router-dom'
import axios from 'axios';
class UpdatePassport extends Component{
  state={
    Firstname:"",
    Lastname:"",
    Fathername:"",
    CitizenshipNo:"",
    Ocupation:"",
    Education:"",
    Phonenumber:"",
    config : {
      headers: {'authorization': `Bearer ${localStorage.getItem('token')}`}
    },
    id:this.props.match.params.id
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  componentDidMount(){
    axios.get('http://localhost:90/passport/single'+this.state.id)
    .then((response)=>{
      console.log(response);
      this.setState({
        Firstname : response.data.passport.Firstname,
        Lastname : response.data.passport.Lastname,
        Fathername : response.data.passport.Fathername,
        CitizenshipNo : response.data.passport.CitizenshipNo,
        Ocupation : response.data.passport.Ocupation,
        Education : response.data.passport.Education,
        Phonenumber : response.data.passport.Phonenumber
      })
    })
    .catch((err) => {
      console.log(err.response);
    })
  }
  updatePassport = (e)=>{
    e.preventDefault();
    const data = new FormData()
    data.append('Firstname', this.state.Firstname)
    data.append('Lastname', this.state.Lastname)
    data.append('Fathername', this.state.Fathername)
    data.append('CitizenshipNo', this.state.CitizenshipNo)
    data.append('Ocupation', this.state.Ocupation)
    data.append('Education', this.state.Education)
    data.append('Phonenumber', this.state.Phonenumber)

    axios.put("http://localhost:90/passport/update/" +this.state.id, this.state, this.state.config)
    .then((response)=>{
      window.alert("Passport successful Inserted")
      window.location.href="/Passportshow"
     
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
   <img src="../Image/license.jpg" md="6" className="passimg"/>
  </MDBCol>
  <MDBCol md="6">
  <div className="card col-12 col-lg-10 login-card mt-5 hv-right" >
  <form onSubmit={this.updatePassport}>
        <p className="h4 text-center mb-4 black-text">Passport Form</p>
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
          Father Name
        </label>
        <input type="text" value={this.state.Fathername} onChange={(event)=>{this.setState({Fathername: event.target.value})}} id="defaultFormRegisterConfirmEx" className="form-control" />
        <br />
         <label htmlFor="defaultFormRegisterPasswordEx" className="grey-text">
          Occupation
        </label>
        <br />
        <input type="text" value={this.state.Ocupation} onChange={(event)=>{this.setState({Ocupation: event.target.value})}} id="defaultFormRegisterPasswordEx" className="form-control" />
        <br />
         <label htmlFor="defaultFormRegisterPasswordEx" className="grey-text">
         Education
        </label>
        <br />
        <input type="text" value={this.state.Education} onChange={(event)=>{this.setState({Education: event.target.value})}} id="defaultFormRegisterPasswordEx" className="form-control" />
        <br />
         <label htmlFor="defaultFormRegisterPasswordEx" className="grey-text">
         Citizenship No.
        </label>
        <br />
        <input type="text" value={this.state.CitizenshipNo} onChange={(event)=>{this.setState({CitizenshipNo: event.target.value})}} id="defaultFormRegisterPasswordEx" className="form-control" />
        <br />
        <label htmlFor="defaultFormRegisterPasswordEx" className="grey-text">
         Phone Number
        </label>
        <br />
        <input type="text" value={this.state.Phonenumber} onChange={(event)=>{this.setState({Phonenumber: event.target.value})}} id="defaultFormRegisterPasswordEx" className="form-control" />
        <br />
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
export default UpdatePassport;