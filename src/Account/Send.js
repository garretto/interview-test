import React from 'react'
import { Card, CardHeader, CardBody, Form, FormGroup, FormFeedback, Label, Input, Button } from 'reactstrap'
import { postTransaction } from '../apiCalls.js'

class Send extends React.Component {
  state = {
    destination: '',
    amount: '',
    sending: false,
    error: '',
    succeeded: null,
    noDesitation: null,
  }

  onChangeDestination = e => {
    this.setState({ destination: e.target.value, noDesitation: false })
  }

  onChangeAmount = e => {
    this.setState({ amount: e.target.value })
  }

  handleSubmit = async e => {
    let { jobcoinAddress, refreshAccountInfo } = this.props
    let { destination, amount } = this.state

    e.preventDefault()

    if (this.invalidAmount()) return

    if (this.state.destination === '') {
      this.setState({noDesitation: true})
      return
    }

    this.setState({ sending: true })

    try {
      let response = await postTransaction(jobcoinAddress, destination, amount)
      let json = await response.json()
      if (!response.ok) {
        throw new Error(json.error)
      }
      this.setState({ sending: false, destination: '', amount: '', succeeded: true })
      refreshAccountInfo()

    } catch (error) {
      this.setState({ sending: false, error: error.message, succeeded: false })
    }
  }

  invalidAmount = () => {
    let { amount } = this.state
    let { balance } = this.props
    if (amount === '') return false

    if (isNaN(amount) || amount == null) {
      return 'Must be a number.'
    }

    if (amount <= 0) {
      return 'Must be a number greater than 0.'
    }

    if (parseFloat(amount) > parseFloat(balance)) {
      return 'Insufficient funds.'
    }

    return false
  }

  render() {
    let { error, succeeded, noDesitation } = this.state
    let amountInvalid = this.invalidAmount()

    let message
    if (succeeded) {
      message = <p className="text-success"><small>Transaction sent successfully.</small></p>
    } else if (error) {
      message = <p className="text-danger"><small>{error}</small></p>
    }

    return (
      <Card>
        <CardHeader tag="h6" className="text-center pt-4 pb-4">Send Jobcoin</CardHeader>
        <CardBody>
          {message}
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label for="destAddress">Destination Address</Label>
              <Input 
                invalid={noDesitation}
                id="destAddress" 
                value={this.state.destination} 
                onChange={this.onChangeDestination} />
                <FormFeedback invalid>Required field.</FormFeedback>
            </FormGroup>
            <FormGroup>
              <Label for="amountSend">Amount to Send</Label>
              <Input
                id="amountSend"
                value={this.state.amount}
                onChange={this.onChangeAmount}
                invalid={!!amountInvalid} />
              <FormFeedback invalid>{amountInvalid}</FormFeedback>
            </FormGroup>
            <Button block color="primary" type="submit">Send Jobcoin</Button>
          </Form>
        </CardBody>
      </Card>
    )
  }
}

export default Send
