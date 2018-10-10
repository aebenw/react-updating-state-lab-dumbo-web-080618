// Code DigitalClicker Component Here
import React, {Component} from 'react';

export default class DigitalClicker extends Component {

  constructor(){
    super()
    this.state = {
      timesClicked : 0
    }
  }

  increase = () => {
    // console.log(this.state.timesClicked)
    const newCount = this.state.timesClicked + 1
    this.setState({
      timesClicked : newCount
    }, () => console.log(this.state.timesClicked))
  }

  render(){
    return (
      <button onClick={this.increase}>{this.state.timesClicked}</button>
    )
  }

}




// In the components/DigitalClicker.js file, create a DigitalClicker React component.
// This component has an initial state property called timesClicked, which is initially defined as 0.
// The component renders out a button with a label that shows the timesClicked value. This means that, at the start, your button should just say 0.
// Whenever the button is clicked, update the state by incrementing the timesClicked by 1.
