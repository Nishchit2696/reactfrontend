import axios from "axios";
import React, { Component } from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

class Licenceshow extends Component {
    state = {
        license: [],
        simage: "",
        Firstname: "",
        Lastname: "",
        BloodGroup: "",
        Ocupation: "",
        Education: "",
        Province: "",
        City: "",
        Phonenumber: ""
    }
    componentDidMount() {
        axios.get("http://localhost:90/license/fetchall")
            .then((response) => {
                console.log("Hello")
                this.setState({
                    license: response.data.data
                })
            })
            .catch((err) => {
                console.log(err.response)
            })
    }
    deletLicence = (id) => {
        axios.delete("http://localhost:90/license/delete/" + id, this.state.config)
        .then((response) => {
            console.log(response)
            window.location.href = '/Licenceshow';
        })
        .catch((err) => {
            console.log(err.response)
        })
    }

    render() {
        return (
            <div className="row">
                {
                this.state.license.map((license) => {
                    return (
                        <div className="col-md-4">
                            <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={"http://localhost:90/images/"+ license.simage} />
                            <Card.Body>
                                <Card.Title>License form</Card.Title>
                                <Card.Text>
                                  
                      </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>{license.Firstname}</ListGroupItem>
                                <ListGroupItem>{license.Lastname}</ListGroupItem>
                                <ListGroupItem>{license.BloodGroup}</ListGroupItem>
                                <ListGroupItem>{license.Ocupation}</ListGroupItem>
                                <ListGroupItem>{license.Education}</ListGroupItem>
                                <ListGroupItem>{license.Province}</ListGroupItem>
                                <ListGroupItem>{license.City}</ListGroupItem>
                                <ListGroupItem>{license.Phonenumber}</ListGroupItem>
                            </ListGroup>
                            <Card.Body>
                                <Card.Link href={"/UpdateLicense/"+license._id}>Update</Card.Link>
                                <Card.Link onClick={this.deletLicence.bind(this, license._id)}>Delete</Card.Link>
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
export default Licenceshow;