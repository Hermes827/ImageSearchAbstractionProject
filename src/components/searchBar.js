import React from 'react';

class SearchBar extends React.Component {

  constructor(){
    super()

    this.state = {
      text: "",
      query: {
              term: "",
              date: "",
              time: ""
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
     })
  }).catch(function(){
        console.log("error");
    });
  }

  render(){
  return (
    <div>
    <form onSubmit={this.executeSearch}>
    <input type='text' name='text' value={this.state.text} onChange={this.captureText}/>
    <button type="button" onClick={null}>cancel</button>
    {console.log(this.state)}
    </form>
    </div>
  );
}
}

export default SearchBar;
