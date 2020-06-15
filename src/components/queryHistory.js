import React from 'react';

class QueryHistory extends React.Component {

  constructor(){
    super()

    this.state = {
      hasClickedButton: false
    }

    this.clickButton = this.clickButton.bind(this)
  }

  clickButton(){
    this.setState({
      hasClickedButton: true
    })
  }

  renderQueries(){
    if(this.state.hasClickedButton === false){
      return(
        <button onClick={this.clickButton}>Click Here</button>
      )
    } else {
      return(
        <div className="queryHistoryBox">what</div>
      )
    }
  }

  render(){
  return (
    <div className="queryHistory">
    <h1>See Past Queries</h1>
    {this.renderQueries()}
    </div>
  );
}
}

export default QueryHistory;
