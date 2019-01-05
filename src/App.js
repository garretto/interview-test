import React, { Component } from 'react';
import './App.css';
import Account from './Account'
import Login from './Login'

class App extends Component {
  state = {
    jobcoinAddress: null,
  }

  onLogin = (jobcoinAddress) => {
    this.setState({ jobcoinAddress })
  }

  onLogout = () => {
    this.setState({ jobcoinAddress: null })
  }

  render() {
    if (this.state.jobcoinAddress == null) return <Login onLogin={this.onLogin} />
    
    return <Account jobcoinAddress={this.state.jobcoinAddress} onLogout={this.onLogout} />
  }
}

export default App;
