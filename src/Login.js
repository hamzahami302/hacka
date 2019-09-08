import React from 'react';
import {Form,Button} from 'react-bootstrap';
import img from './lll.jpg'

import {Link} from 'react-router-dom';

export default class Login extends React.Component{

    render(){

        return(
          <div className="container">
          <div style={{backgroundImage : `url(${img})`,height: '100%',width : '100%',
                overflow: 'hidden',backgroundRepeat  : 'no-repeat'}}>
                <div style={{marginTop : 300,marginLeft: 100}}></div>
                
                
    
            <div className='login'>
            <center><h1>login </h1></center>
            <Link to="/Login"></Link>

            <Form>
            <center>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Username</Form.Label>
    <Form.Control type="email" placeholder="Enter Username" />
    <Form.Text className="text-muted">
      
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
  </center>
</Form>
</div>
</div>


            </div>
        )
    }
}