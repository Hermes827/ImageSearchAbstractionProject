import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/searchBar.js'

class App extends React.Component {

  constructor(){
    super()
  }

  // componentDidMount(){
  //   fetch("http://127.0.0.1:8081/")
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log(data)
  //     })
  //   }

  render(){
  return (
    <div className="App">
      <div className="mainDiv">
        <h1>Get image search API data</h1>
        <SearchBar/>
      </div>
    </div>
  );
}
}

export default App;
