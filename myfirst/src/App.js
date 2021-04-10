import logo from './logo.svg';
import './App.css';
import './CSS/Style.css'
import Header from './Header/Header'
// import Middle from './Middle/Passport'
import Footer from './Footer/Footer'
import Middle from './Middle/Middle'
import {BrowserRouter}from "react-router-dom";
import {Link}from "react-router-dom";



import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <div className="App">

      <Header>Header</Header>

      <BrowserRouter>
      <Middle></Middle>
      </BrowserRouter>
      
     {/* <Header>Header</Header> */}
      {/* <Middle>login</Middle> */}
      <Footer>Map</Footer>
    </div>
  );
}

export default App;
