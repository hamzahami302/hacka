import React from 'react';
import {BrowserRouter,Switch,Route,Link} from 'react-router-dom';
import {Navbar,Nav,NavDropdown} from 'react-bootstrap';
import ReactDOM from "react-dom";
import Enrollment from './Enrollment';
import Home from './Home';
import Speciality from './speciality';
import Login from './Login';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css'

export default class App extends React.Component{

  constructor(props){
    super(props);

  }
  state={
    button:'',
  }

  


    render(){


        return(

            <div>
                <BrowserRouter>

 <Navbar bg="light" expand="lg">
  <Navbar.Brand href="">99</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Link to="/"><Nav.Link href="/Home">Home</Nav.Link></Link>
 
      <NavDropdown title="Speciality" id="basic-nav-dropdown">
        <NavDropdown.Item href="#Art/3.1">Art</NavDropdown.Item>
        <NavDropdown.Item href="#Medical studies/3.2">Medical studies</NavDropdown.Item>
        <NavDropdown.Item href="#Business studies/3.3">Business studies</NavDropdown.Item>
        <NavDropdown.Item href="#Engineering studies/3.3">Engineering studies</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="./Enrollment">Enrollment</Nav.Link>
      <div className="row col-10 ">
      <span width="70%"></span>
     
     <Link to="/Login"><Nav.Link href="/Login">Login</Nav.Link></Link>
     
     
     </div>

    </Nav>
    </Navbar.Collapse>
    </Navbar>


      
    <Switch>
       
      <Route exact path="/" component={Home} />
       <Route path="/Speciality" component={Speciality} />
       <Route path="/Enrollment" component={Enrollment} />
       <Route path="/Login" component={Login} />
       
     </Switch>

                
                </BrowserRouter>
            </div>
        )
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);