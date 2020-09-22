import React from 'react';
import { Form, Button, Row, Col, Card } from 'react-bootstrap';

const Login = () => {
  return (
    <Card style={ { margin:'auto', 
    width:'40rem', 
    marginTop: '4rem'
} }>

      <Form style={ {
    margin:'auto',
    width:'30rem',
    marginBottom:'2rem',
    marginTop:'2rem'} }>
    
        <Row>

          <Col>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email"/>
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password"/>
            </Form.Group>

            <Button style={ {marginTop:'85px'} } variant="outline-info" type="submit">
              SignIn
            </Button>
          </Col>

          <Col>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" />
            </Form.Group>

            <Form.Group controlId="formConfirmPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter password again" />
            </Form.Group>

            <Button variant="outline-info" type="submit">
                Login
            </Button>

          </Col>

        </Row>



      </Form>

    </Card>
  );
}

export default Login;