import React from 'react';

class Query extends React.Component {

  constructor(){
    super()
  }

  render(){
  return (
    <div className="query">
      <h5>SEARCH TERM: {"\"" + this.props.info.term + "\""} DATE: {this.props.info.date} EXECUTED IN: {this.props.info.time} SECONDS</h5>
    </div>
  );
}
}

export default Query;

// QUERY ID: {this.props.info.id} =>
