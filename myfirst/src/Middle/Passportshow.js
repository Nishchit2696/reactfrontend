import axios from "axios";
import React, { Component } from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

class Passportshow extends Component {
    state = {
        passport: [],
        simage: "",
        Firstname: "",
        Lastname: "",
        Fathername: "",
        CitizenshipNo: "",
        Ocupation: "",
        Education: "",
        Phonenumber: ""
    }
    componentDidMount() {
        axios.get("http://localhost:90/passport/fetchall")
            .then((response) => {
                console.log("Hello")
                this.setState({
                    passport: response.data.data
                })
            })
            .catch((err) => {
                console.log(err.response)
            })
    }
    deletPassport = (id) => {
        axios.delete("http://localhost:90/passport/delete/" + id, this.state.config)
        .then((response) => {
            console.log(response)
            window.location.href = '/Passportshow';
        })
        .catch((err) => {
            console.log(err.response)
        })
    }

    render() {
        return (
            <div className="row">
                {
                this.state.passport.map((passport) => {
                    return (
                        <div className="col-md-4">
                            <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={"http://localhost:90/images/"+ passport.simage} />
                            <Card.Body>
                                <Card.Title>Passport form</Card.Title>
                                <Card.Text>
                                  
                      </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>{passport.Firstname}</ListGroupItem>
                                <ListGroupItem>{passport.Lastname}</ListGroupItem>
                                <ListGroupItem>{passport.Fathername}</ListGroupItem>
                                <ListGroupItem>{passport.CitizenshipNo}</ListGroupItem>
                                <ListGroupItem>{passport.Ocupation}</ListGroupItem>
                                <ListGroupItem>{passport.Education}</ListGroupItem>
                                <ListGroupItem>{passport.Phonenumber}</ListGroupItem>
                            </ListGroup>
                            <Card.Body>
                                <Card.Link href={"/UpdatePassport/"+passport._id}>Update</Card.Link>
                                <Card.Link onClick={this.deletPassport.bind(this, passport._id)}>Delete</Card.Link>
                            </Card.Body>
                        </Card>
                        </div>
                    )
                })
            }
            </div>
        );
    }


}
export default Passportshow;