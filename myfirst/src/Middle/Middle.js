import React, { Component } from 'react'
import {Route, Router} from 'react-router-dom'
import Licenceshow from './Licenceshow'
import Login from './Login'
import signup from './signup'
import passport from './Passport'
import license from './Licence'
import voting from './voting'
import Passportshow from './Passportshow'
import UpdatePassport from './UpdatePassport'
import UpdateLicense from './UpdateLicense'

class Middle extends Component{
   
    render(){
        return(
            <div>
                
                <Route path="/"exact component = {Login}/>
                <Route path="/signup"exact component={signup}/>
                <Route path="/passport"exact component={passport}/>
                <Route path="/licence" exact component={license}/>
                <Route path="/voting" exact component={voting}/>
                <Route path="/Licenceshow" exact component={Licenceshow}/>
                <Route path="/Passportshow" exact component={Passportshow}/>
                <Route path="/UpdatePassport/:id" exact component={UpdatePassport}/>
                <Route path="/UpdateLicense/:id" exact component = {UpdateLicense}/>

            </div>
           
        )
    }

}

export default Middle