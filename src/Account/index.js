import React from 'react'
import AccountNav from './AccountNav'
import { Container, Row, Col } from 'reactstrap'
import AccountBalance from './AccountBalance'
import Send from './Send'
import HistoryGraph from './HistoryGraph'
import { getAddressInfo } from '../apiCalls'

class Account extends React.Component {
  state = {
    refreshing: false,
    balance: null,
    transactions: null
  }

  componentDidMount() {
    this.refreshAccountInfo()
  }

  refreshAccountInfo = async () => {
    try {
      this.setState({ refreshing: true })
      let response = await getAddressInfo(this.props.jobcoinAddress)
      let json = await response.json()
      this.setState({
        balance: json.balance,
        transactions: json.transactions,
        refreshing: false
      })
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    let { jobcoinAddress, onLogout } = this.props
    let { balance, refreshing, transactions } = this.state

    return (
      <div>
        <AccountNav jobcoinAddress={jobcoinAddress} onLogout={onLogout} />
        <Container className="mb-4">
          <Row>
            <Col md={4}>
              <div className="mb-4">
                <AccountBalance balance={balance} refreshing={refreshing} />
              </div>
              <Send
                jobcoinAddress={jobcoinAddress}
                balance={balance}
                refreshAccountInfo={this.refreshAccountInfo} />
            </Col>

            <Col md={8}>
              <HistoryGraph
                refreshing={refreshing}
                transactions={transactions}
                jobcoinAddress={jobcoinAddress} />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Account
