import React from 'react';

class Query extends React.Component {

  constructor(){
    super()
  }



  render(){
  return (
    <div className="query">
      <h5>SEARCH TERM: {"\"" + this.props.info.stats.term + "\""} DATE: {this.props.info.stats.date} EXECUTED IN: {this.props.info.stats.time} SECONDS</h5>
      <button onClick={()=>this.props.delete(this.props.info)}>delete</button>
    </div>
  );
}
}

export default Query;

// QUERY ID: {this.props.info.id} =>
