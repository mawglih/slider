import React, { Component } from 'react';
import styles from './slider.css';

export class Slider extends Component {
  state = {
    slots: 52,
    start: 18,
    end: 70,
    labelMode: 'mid',
  }

  render() {
    const {
      sliderName,
      sliderClass,
    } = this.props;
    return (
      <div>
        <h2>
          {sliderName}
        </h2>
        <div className={styles[sliderClass]}>
          <div className="container">
            Slider
          </div>
        </div>
      </div>
    )
  }
}

export default Slider;
