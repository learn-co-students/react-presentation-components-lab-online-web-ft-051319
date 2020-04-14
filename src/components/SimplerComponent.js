// Code SimplerComponent Here
import React from 'react'
/*
export default class SimplerComponent extends React.Component {
  render() {
    return (<div></div>)

  }
}
*/
const SimplerComponent = (props) => {
  return (<div onClick={props.handleClick}>I am just happy</div>)
}

export default SimplerComponent
