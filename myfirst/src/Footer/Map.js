import { Component } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

    class Map extends Component{

       
        render(){
            return(
                <div>
                    <MDBFooter color="blue" className="font-big pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Nepal Government Contact</h5>
            <p>
            National Information Technology Center
             Singhdurbar, Kathmandu
              Phone: +977-1-4211917, 4211710, 4211527
               Fax: +977-1-4243362
               Email: nationalportal@nitc.gov.np
            </p>
          </MDBCol>
         </MDBRow>
         </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.NepalGovernment.com"> NepalGoverment.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
                </div>
            )
        }
    }



export default Map;

