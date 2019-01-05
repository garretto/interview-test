import React from 'react'
import { CardHeader, Card, CardBody, Input, Label, Button, Form } from 'reactstrap'
import logo from '../logo.svg'
import './login.css'

class Login extends React.Component {
  state = {
    jobcoinAddress: ''
  }

  handleJobcoinAddressChange = e => {
    this.setState({ jobcoinAddress: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.onLogin(this.state.jobcoinAddress)
  }

  render() {
    return (
      <div className="login-container">
        <div className="text-center"><img src={logo} alt="Jobcoin" className="login-logo mb-5" /></div>
        <Card>
          <CardHeader tag="h5" className="text-center pt-4 pb-4">
            Welcome! Sign in with your<br />Jobcoin Address
          </CardHeader>
          <CardBody className="px-5 pb-5">
            <Form onSubmit={this.handleSubmit}>
              <Label for="jobcoinAddress">Jobcoin Address</Label>
              <Input
                id="jobcoinAddress"
                value={this.state.jobcoinAddress}
                onChange={this.handleJobcoinAddressChange}
                className="mb-4"
              />
              <Button block color="primary" type="submit">Sign In</Button>
            </Form>
          </CardBody>
        </Card>
      </div>
    )
  }
}

export default Login
