import React from 'react';
import Query from '../components/query.js'

class JsonResponse extends React.Component {

  constructor(){
    super()
  }

  render(){
  return (
    <div className="jsonResponse">
    <h1>Query Results</h1>
    {(this.props.info.items !== undefined) ? this.props.info.items.map(data=>{console.log(data)}):console.log("error")}
    </div>
  );
}
}

export default JsonResponse;

//finally figured out how to only trigger .map once state data is set, basically
//I just used this.props.info.items !== undefined, the solution was much simpler
//than I initially thought
