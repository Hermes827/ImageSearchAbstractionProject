import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/searchBar.js'
import QueryHistory from './components/queryHistory.js'

class App extends React.Component {

  constructor(){
    super()

    this.state = {
      queryRecords: ""
    }

    this.updateQueryHistory = this.updateQueryHistory.bind(this)
  }

  componentDidMount(){
    fetch("http://localhost:8000/stats")
    .then(res => res.json())
    .then(data => {
      console.log(data)
      this.setState({
        queryRecords: data.slice(-10)
      })
      })
    }

    updateQueryHistory(){
      fetch("http://localhost:8000/stats")
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.setState({
          queryRecords: data.slice(-10)
        })
        })
    }

  render(){
  return (
    <div className="App">
      <div className="mainDiv">
        <SearchBar update={this.updateQueryHistory}/>
        <QueryHistory records={this.state.queryRecords}/>
      </div>
    </div>
  );
}
}

export default App;
