import React from 'react';

class SearchBar extends React.Component {

  constructor(){
    super()

    this.state = {
      text: "",
      query: {
              term: "",
              date: "",
              time: 0
            },
     search: ""
    }
    this.captureText = this.captureText.bind(this)
    this.executeSearch = this.executeSearch.bind(this)
  }

  captureText(event){
      this.setState({
        text: event.target.value
      })
    }

    executeSearch(e){
    e.preventDefault()
    fetch(`https://customsearch.googleapis.com/customsearch/v1?cx=004660269848467344080%3Aikcohhku1og&exactTerms=${this.state.text}&searchType=image&key=AIzaSyAHhcDr9miOtzxIWHbT3eCUyJtDpb0g51k`)
   .then(response => response.json())
   .then(data => {
     let today = new Date();
     let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
     let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
     let dateTime = date+' '+time;
     this.setState({
       search: data,
       query: {term: this.state.text, date: dateTime, time: data.searchInformation.searchTime}
     }, () => this.postQueryData(this.state.query))
  }).catch(function(){
        console.log("error");
    });
  }

  // componentDidUpdate(){
  //   if(this.state.query.time !== 0){
  //
  //   }
  // }
//need a better solution than this, it works only once but then calls subsequently because
//this.state.query.time ceases to be 0

  postQueryData(){
    // if(this.state.query.time === 0){return}
  const requestOptions = {
       method: 'POST',
       headers: {'Content-Type': 'application/json'},
       body: JSON.stringify({record: {term: this.state.query.term, date: this.state.query.date, time: this.state.query.time}})
   };
   fetch('http://localhost:3000/records', requestOptions)
       .then(response => response.json())
       .then(data => console.log("success"));
     }

  render(){

  return (
    <div>
    <h1>Get image search API data</h1>
    <form onSubmit={this.executeSearch}>
    <input type='text' name='text' value={this.state.text} onChange={this.captureText}/>
    <button type="button" onClick={null}>cancel</button>
    </form>
    </div>
  );
}
}

export default SearchBar;
