import React from "react";
import "./style1.css";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import Img from './hamza.jpg'

export default class Enrollment extends React.Component {

     handleClick(e) {
        e.preventDefault();
        console.log('Le lien a été cliqué.');
      }
    handleChange(val) {
        this.setState({value: val.target.value});
        
       
        console.log(val.target.value)

      }

    


  render() {
    return (

      <div className="container">
      <div style={{backgroundImage : `url(${Img})`,height: '100%',width : '100%',
            overflow: 'hidden',backgroundRepeat  : 'no-repeat'}}>
            <div style={{marginTop : 300,marginLeft: 100}}></div>
            
      <center><h1>Inscription </h1></center>
        <Form>
          <center>
          <FormGroup>
            <Label for="exampleID">ID</Label>
            <Input type="text" name="email" id="ID" placeholder="ID" onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="exampleFirstName">First-name</Label>
            <Input
              type="text"
              name="FN"
              id="FN"
              placeholder="your First-Name please"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleLastName">Last-name</Label>
            <Input
              type="text"
              name="LN"
              id="LN"
              placeholder="your Last-Name please"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleUnervrsity">University</Label>
            <Input
              type="text"
              name="UN"
              id="UN"
              placeholder="your University please"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              required=""
              placeholder="your email please"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleNumber">Number</Label>
            <Input
              type="number"
              name="num"
              id="num"
              placeholder="your telephone number please"
              onChange={this.handleChange}
            />
          </FormGroup>

          <Button color="primary"  onClick={this.handleclick}>Submit</Button>
          </center>
        </Form>
        </div>
      </div>
    );
  }
}