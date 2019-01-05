import React from 'react'
import { Card, CardHeader, CardBody } from 'reactstrap'
import loader from '../three-dots-loader.svg'

class AccountBalance extends React.Component {
  render() {
    let { balance, refreshing } = this.props

    return (
      <Card>
        <CardHeader tag="h6" className="text-center pt-4 pb-4">Jobcoin Balance</CardHeader>
        <CardBody className="text-center h3">
          {refreshing ? <img src={loader} alt="loading..." /> : balance}
        </CardBody>
      </Card>
    )
  }
}

export default AccountBalance
