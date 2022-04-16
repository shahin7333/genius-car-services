import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {
    const navigate=useNavigate();
    const  navigateLogin=()=>{
        navigate('/login');
    }
    const handleRegister=event=>{
        event.preventDefault();
      const name= event.target.name.value;
      const email= event.target.email.value;
     const password= event.target.password.value;
    }
  return (
    <div className='register-form w-75 bg-light p-5 rounded mx-auto mt-5'>
      <h2 className='text-primary text-center'>Please Register</h2>
     
      <Form onSubmit={handleRegister}>
        <Row>
          <Col>
          <Form.Label><small>First Name</small></Form.Label>
            <Form.Control name="name" placeholder="First name" />
          </Col>
          <Col>
          <Form.Label><small>Last Name</small></Form.Label>
            <Form.Control name='name' placeholder="Last name" />
          </Col>
        </Row>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name="password" type="password" placeholder="Password" required/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <p className='mt-2'>Already have an account? <Link to='/login' className="login text-danger pe-auto text-decoration-none" onClick={navigateLogin}>Please Login</Link></p>
     
    </div>
  )
}

export default Register
