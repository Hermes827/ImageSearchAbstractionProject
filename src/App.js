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
  }

  componentDidMount(){
    fetch("http://localhost:3000/records")
    .then(res => res.json())
    .then(data => {
      this.setState({
        queryRecords: data.slice(-10)
      })
      })
    }

  render(){
  return (
    <div className="App">
      <div className="mainDiv">
        <SearchBar/>
        <QueryHistory records={this.state.queryRecords}/>
        {console.log(this.state.queryRecords)}
      </div>
    </div>
  );
}
}

export default App;
