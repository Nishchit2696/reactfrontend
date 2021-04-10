import React, { Component } from 'react'
import axios from 'axios';
import{Redirect, Link} from'react-router-dom'
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBBtn,} from "mdbreact";
class Login extends Component{
  state={
    Citizenship:"",
    Password:"",
    message:""

  }
  loginUser=(e)=>{
    e.preventDefault();
    const data ={
      Citizenship:this.state.Citizenship,
      Password:this.state.Password
    }
    axios.post("http://localhost:90/login", this.state)
    .then((response)=>{
      console.log(response)
        if(response.data.success==true){
          localStorage.setItem('token', response.data.token)
        }
        this.setState({
          message:response.data.message
        })
        console.log(response.data.token);
          })
      .catch()
    }
    render(){
      if(localStorage.getItem('token')){
        window.location.href='/passport'
      }
        return(
            <div>
            <MDBFooter color="blue" className="font-big pt- mt-4">
          <MDBContainer fluid className="text-center text-md-left">
<MDBRow>
  <MDBCol md="6">
   <img src="../Image/img1.jpg" md="6"/>
  </MDBCol>
  <MDBCol md="6">
  <div className="card col-12 col-lg-10 login-card mt-5 hv-center" >
  <form onSubmit={this.loginUser}>
        <p className="h4 text-center mb-4 black-text" >Sign in</p>
        <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
          Your Citizenship NO.
        </label>
        <input type="text" value={this.state.Citizenship} onChange={(event)=>{this.setState({Citizenship: event.target.value})}} id="defaultFormLoginEmailEx" className="form-control" />
        <br />
        <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
          Your Password
        </label>
        <input type="password" value={this.state.Password} onChange={(event)=>{this.setState({Password: event.target.value})}} id="defaultFormLoginPasswordEx" className="form-control" />
        <br/>
        <div>
          <MDBCol md="6">
          <a href="/signup" className="grey-text">If you dont have account?</a>
           </MDBCol>  
        </div>
        <div className="text-center mt-4">
          <MDBBtn color="unique" type="submit">Login</MDBBtn>
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
export default Login;