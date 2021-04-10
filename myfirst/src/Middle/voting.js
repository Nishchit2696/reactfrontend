import React, { Component } from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBBtn } from "mdbreact";
import { Form, Col, Button } from "react-bootstrap";
class voting extends Component{
    render(){
        return(
            <div>
            <MDBFooter color="blue" className="font-big pt- mt-4">
          <MDBContainer fluid className="text-center text-md-left">
<MDBRow>
  <MDBCol md="6">
   <img src="../Image/voting.jpeg" md="6" className="passimg"/>
  </MDBCol>
  <MDBCol md="6">
  <div className="card col-12 col-lg-10 login-card mt-5 hv-right" >
  <form>
        <p className="h4 text-center mb-4 black-text">Passport Form</p>
        <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
          First Name
        </label>
        <input type="text" id="defaultFormRegisterNameEx" className="form-control" />
        <br />
        <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
          Last Name
        </label>
        <input type="email" id="defaultFormRegisterEmailEx" className="form-control" />
        <br />
        <label htmlFor="defaultFormRegisterConfirmEx" className="grey-text">
          Father Name
        </label>
        <input type="email" id="defaultFormRegisterConfirmEx" className="form-control" />
        <br />
         <label htmlFor="defaultFormRegisterPasswordEx" className="grey-text">
          Citizenship No.
        </label>
        <br />
        <input type="password" id="defaultFormRegisterPasswordEx" className="form-control" />
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
export default voting;