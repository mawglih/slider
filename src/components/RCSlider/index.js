import React, { Component } from 'react';
import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
// import styles from './rcslider.css';

export class ControlledRange extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: [20, 40, 60, 80],
    };
  }
  handleChange = (value) => {
    this.setState({
      value,
    });
  }
  render() {
    return (
      <Range value={this.state.value} onChange={this.handleChange} />
    );
  }
}

class RCSlider extends Component {
  render() {
    return (
      <div>
        <Range
          defaultValue={[18, 70]}
          trackStyle={{ backgroundColor: 'red' }}
          handleStyle={{ backgroundColor: 'red'}}
          railStyle={{ backgroundColor: '#222' }}
        />
      </div>
    )
  }
}

export default RCSlider;
