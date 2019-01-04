import React, { Component, Fragment } from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import styles from './rang.css';

class MyRange extends Component {
  state = {
      value: { min: 18, max: 70 },
  };


  render() {
    const {
      value
    } = this.state;
    return (
      <Fragment>
        <form className={styles.form}>
          <InputRange
            draggableTrack
            maxValue={70}
            minValue={18}
            value={value}
            onChange={value => this.setState({ value })}
            name="Age Range"
          />
          <hr/>
          <InputRange
            draggableTrack
            maxValue={20}
            minValue={0}
            formatLabel={value => `${value} kg`}
            value={this.state.value4}
            onChange={value => this.setState({ value4: value })}
            onChangeComplete={value => console.log(value)}
          />
        </form>
      </Fragment>
      
    );
  }
}

export default MyRange