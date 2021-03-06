import React, { Component } from 'react'
import {Form, Button} from 'react-bootstrap';
import { useAuth0 } from "../react-auth0-spa";

const prayerTypes = [ '감사기도', '선교기도', '금식기도', '새벽기도', '물질기도' ]

class LoggedInPrayerForm extends Component {
  constructor(props) {
    super(props);

    this.state = {  
      formInputs: {

      }
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let name = e.target.id;
    let value = e.target.value;

    this.setState({
      formInputs : {
        ...this.state.formInputs,
        [name] : value
      }
    });
    
  }

  handleSubmit(e) {
    e.preventDefault();

    fetch('http://localhost:5000/prayers/new', {
      method: "POST",
      body: JSON.stringify(this.state.formInputs),
      headers: {
        'Accept': 'application/json',
        "Content-Type": 'application/json'
      }
    }).then((res) => {
      console.log("COMPLETED", res);
    }).catch((err)=> {
      console.log(err);
    });
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="prayerTitle">
          <Form.Label>Prayer Title</Form.Label>
          <Form.Control onChange={this.handleChange} type="text" placeholder="Enter Prayer Title" />
        </Form.Group>
        <Form.Group controlId="prayerContext">
          <Form.Label>Context</Form.Label>
          <Form.Control onChange={this.handleChange} as='textarea' rows='5' placeholder="What is your prayer?" />
        </Form.Group>
        <Form.Group controlId="prayerType">
          <Form.Label>기도종류</Form.Label>
          <Form.Control onChange={this.handleChange} as="select">
            {prayerTypes.map((type,index) => (
              <option key={index} value={index}>{type}</option>
            ))}
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Request
        </Button>
      </Form>
    )
  }
}

class NotLoggedInPrayerForm extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <Form>
          {/* <Form.Group controlId="formBasicEmail">
            <Form.Label>Prayer Title</Form.Label>
            <Form.Control type="text" placeholder="Enter Prayer Title" />
            <Form.Text className="text-muted">
              What is your Prayer about?
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Request
          </Button> */}

          <Button>You are not logged in</Button>
      </Form>
    )
  }
}

export {
  LoggedInPrayerForm,
  NotLoggedInPrayerForm
}