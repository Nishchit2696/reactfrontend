import React, { Component } from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBBtn } from "mdbreact";
import { Form, Col, Button } from "react-bootstrap";
import{Redirect, Link} from'react-router-dom'
import axios from 'axios';
class UpdateLicense extends Component{
  state={
    Firstname:"",
    Lastname:"",
    BloodGroup:"",
    Ocupation:"",
    Education:"",
    Province: "",
    City : "",
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

  updatelicense = (e)=>{
    e.preventDefault();
    const data = new FormData()
    data.append('Firstname', this.state.Firstname)
    data.append('Lastname', this.state.Lastname)
    data.append('BloodGroup', this.state.Fathername)
    data.append('Ocupation', this.state.Ocupation)
    data.append('Education', this.state.Education)
    data.append('Province', this.state.Province)
    data.append('City', this.state.City)
    data.append('Phonenumber', this.state.Phonenumber)

    axios.put("http://localhost:90/license/update/" +this.state.id, this.state, this.state.config)
    .then((response)=>{
      window.alert("license successful Update")
      window.location.href="/Licenceshow"
     
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
<form onSubmit={this.updatelicense}>
    <p className="h4 text-center mb-4 black-text">Licence Form</p>
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
      Blood Group
    </label>
    <input type="text" value={this.state.BloodGroup} onChange={(event)=>{this.setState({BloodGroup: event.target.value})}} id="defaultFormRegisterConfirmEx" className="form-control" />
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
     Province
    </label>
    <br />
    <input type="text" value={this.state.Province} onChange={(event)=>{this.setState({Province: event.target.value})}} id="defaultFormRegisterPasswordEx" className="form-control" />
    <br />
     <label htmlFor="defaultFormRegisterPasswordEx" className="grey-text">
     City
    </label>
    <br />
    <input type="text" value={this.state.City} onChange={(event)=>{this.setState({City: event.target.value})}} id="defaultFormRegisterPasswordEx" className="form-control" />
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
export default UpdateLicense;