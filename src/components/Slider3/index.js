import React, { Component } from 'react';
import styles from './slider.css';

export class Slider3 extends Component {
  state = {
    lowerVal: 20,
    upperVal: 50,
    posMin: 1,
    posMax: 23,
  }

  onLowerChange = e => {
    const {
      upperVal,
    } = this.state;
    let val = e.target.value;
    if(val < upperVal) {
      this.setState({
        lowerVal: val,
        posMin: val
      });
    } else {
      this.setState({
        lowerVal: upperVal,
        posMin: upperVal
      });
    }
    if(val < 20) {
      this.setState({
        posMin: 0
      })
    } else if(val < 25) {
      this.setState({
        posMin: val * .1
      });
    } else if ( val >= 25 && val < 30) {
        this.setState({
          posMin: val * .2
      });
    } else if ( val >= 30 && val < 35) {
        this.setState({
          posMin: val * .3
      });
    } else if ( val >= 35 && val < 40) {
        this.setState({
          posMin: val * .35
      });
    } else if(val >= 40 && val < 45){
        this.setState({
          posMin: val * .4
      });
    } else if(val >= 45 && val < 50){
        this.setState({
          posMin: val * .44
      });
    } else if(val >= 50 && val < 60){
        this.setState({
          posMin: val * .48
      });
    } else {
        this.setState({
          posMin: val * .52
      });
    }
  }

  onUpperChange = e => {
    const {
      lowerVal,
    } = this.state;
    let val = e.target.value;
    if(val > lowerVal) {
      this.setState({
        upperVal: val,
       });
    } else {
      this.setState({
        upperVal:lowerVal,
      })
    }
    if(val < 25) {
      this.setState({
        posMax: val * .1
      });
    } else if ( val >= 25 && val < 30) {
        this.setState({
          posMax: val * .25
      });
    } else if ( val >= 30 && val < 40) {
        this.setState({
          posMax: val * .35
      });
    } else if(val >= 40 && val < 45){
        this.setState({
          posMax: val * .45
      });
    } else if(val >= 45 && val < 50){
        this.setState({
          posMax: val * .5
      });
    } else if(val >= 50 && val < 60){
        this.setState({
          posMax: val * .52
      });
    } else {
        this.setState({
          posMax: val * .55
      });
    }
  }

  render() {
    const {
      lowerVal,
      upperVal,
      posMin,
      posMax,
    } = this.state;
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <span
            className={styles.multi_range}
          >
            <input
              data-slider="min"
              type="range"
              min="18"
              max="70"
              value={lowerVal}
              className={styles.slider}
              onChange={this.onLowerChange}
            />
            <input
              data-slider="max"
              type="range"
              min="18"
              max="70"
              id="range2"
              value={upperVal}
              className={styles.slider}
              onChange={this.onUpperChange}
            />
            <span
              className={styles.minOutput}
              style={{ left: posMin + 'rem'}}
            >
              {lowerVal}
            </span>
            <span
              className={styles.maxOutput}
              style={{ left: posMax + 'rem' }}
            >
              {upperVal}
            </span>
          </span>
          <span className={styles.minAge}>
            {'18'}
          </span>
          <span className={styles.maxAge}>
            {'70+'}
          </span>
        </div>
      </div>
    )
  }
}

export default Slider3;
