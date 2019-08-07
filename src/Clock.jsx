import React, {Component} from 'react';
import './App.css';

class Clock extends Component {
// props refer to data or state passed from parent components to child components
  constructor(props)
  {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    }
    console.log('this.props', this.props)
  }

  componentWillMount()
  {
    this.getTimeUntil(this.props.deadline);
  }

  // will run every 1000 milliseconds
  componentDidMount()
  {
    setInterval(() => this.getTimeUntil(this.props.deadline), 1000)
  }

 // adds a leading 0 to the numbers to fix spacing issues
  leading0(num)
  {
    return num < 10 ? '0' + num : num;
  }
  getTimeUntil(deadline)
  {
    // time only calculated once so constant keyword is used
    const time = Date.parse(deadline) - Date.parse(new Date());
    console.log('time', time);
    // modulo outputs the remainder
    const seconds = Math.floor((time/1000) % 60);
    const minutes = Math.floor((time/1000/60) % 60);
    const hours = Math.floor(time/(1000*60*60) % 24);
    const days = Math.floor(time/(1000*60*60*24));
    console.log('seconds', seconds, 'minutes', minutes, 'hours', hours, 'days', days);
    // using a lifecycle method
    // shorthand if the key and value pair are the same string then you can just put the name
    this.setState({days, hours, minutes, seconds})


  }

  render()
  {
    return (
      <div>
        <div className = "Days"> {this.leading0(this.state.days)} Days</div>
        <div className = "Hours"> {this.leading0(this.state.hours)} Hours </div>
        <div className = "Minutes"> {this.leading0(this.state.minutes)} Minutes </div>
        <div className = "Seconds"> {this.leading0(this.state.seconds)} seconds </div>
      </div>
    )
  }
}

export default Clock;
