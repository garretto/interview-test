import React from 'react'
import { Card, CardHeader, CardBody } from 'reactstrap'
import { VictoryChart, VictoryAxis, VictoryArea } from 'victory';
import loader from '../three-dots-loader.svg'


class HistoryGraph extends React.Component {
  state = {
    chartData: []
  }

  componentDidMount() {
    if (!this.props.refreshing && this.props.transactions) {
      this.aggregateData()
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.refreshing && !this.props.refreshing && this.props.transactions) {
      this.aggregateData()
    }
  }

  aggregateData = () => {
    let { transactions, jobcoinAddress } = this.props
    let chartData = []

    // Should probably sort first, but server returns transactions in order
    for (let i = 0; i < transactions.length; i++) {
      let balance = (i === 0) ? 0 : chartData[i - 1].balance

      if (transactions[i].toAddress === jobcoinAddress && transactions[i].fromAddress === jobcoinAddress) {
        balance += 0
      } else if (transactions[i].toAddress === jobcoinAddress) {
        balance += parseFloat(transactions[i].amount)
      } else {
        balance -= parseFloat(transactions[i].amount)
      }

      chartData[i] = {
        transaction: i,
        balance
      }
    }

    this.setState({ chartData })
  }

  render() {
    let { transactions } = this.props

    let chart = <div className="text-center pt-5 pb-5"><img src={loader} alt="loading..." /></div>

    if (transactions) {
      chart = (
        <VictoryChart>
          <VictoryAxis
            dependentAxis
          />
          <VictoryArea
            animate={{
              duration: 2000,
              onLoad: { duration: 1000 }
            }}
            style={{ data: { fill: '#167ffb' } }}
            data={this.state.chartData}
            y="balance"
            x="transaction"
          />
        </VictoryChart>
      )
    }

    return (
      <Card>
        <CardHeader tag="h6" className="pt-4 pb-4 pl-4">Account Balance Over Time</CardHeader>
        <CardBody>
          {chart}
        </CardBody>
      </Card>
    )
  }
}

export default HistoryGraph
