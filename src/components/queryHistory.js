import React from 'react';
import Query from '../components/query.js'

class QueryHistory extends React.Component {

  constructor(){
    super()

    this.state = {
      hasClickedButton: false
    }
  }

  render(){
  return (
    <div className="queryHistoryBox">
    <div >
    <h1 className="queryStuff">Past 10 Queries</h1><button className="queryStuff1" onClick={this.props.delete}>Delete query history</button>
    </div>
    {(this.props.records.length !== 0) ? this.props.records.reverse().map(record => {return <Query
                                                                                             info={record}
                                                                                             delete={this.props.delete}
                                                                                             />}) : console.log("error")}
    </div>
  );
}
}

export default QueryHistory;
