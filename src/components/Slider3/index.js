import React, { Component } from 'react';
import styles from './slider.css';

export class Slider3 extends Component {
  state = {
    lowerVal: 20,
    upperVal: 50,
    posMax_X: null,
    posMax_Y: null,
    posMin_X: null,
    posMin_Y: null,
  }

  // getYposMin = e => {
  //   this.setState({
  //     posMin_Y: e.x - 40,
  //   })
  // }

  // getYposMax = e => {
  //   this.setState({
  //     posMax_Y: e.x - 40,
  //   })
  // }
  
  handlePositionMin = e => {
    this.setState({
      posMin_X: e.x - 40,
      posMin_Y: e.y - 40,
    });
  }
  handlePositionMax = e => {
    this.setState({
      posMax_X:e.x + 10,
      posMax_Y:e.y - 40,
    });
  }
  

  onLowerChange = e => {
    const {
      upperVal,
    } = this.state;
    let val = e.target.value;
    if(val < upperVal) {
      this.setState({
        lowerVal: val,
      });
    } else {
      this.setState({
        lowerVal: upperVal,
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
  }

  render() {
    const {
      lowerVal,
      upperVal,
      posMin_X,
      posMin_Y,
      posMax_X,
      posMax_Y,
    } = this.state;
    // console.log('state: ', posMin_X, posMin_Y);
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <div
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
              onMouseEnter={() => document.addEventListener('mousemove', this.handlePositionMin)}
              onMouseLeave={() => document.removeEventListener('mousemove', this.handlePositionMin)}
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
              onMouseEnter={() => document.addEventListener('mousemove', this.handlePositionMax)}
              onMouseLeave={() => document.removeEventListener('mousemove', this.handlePositionMax)}
            />
          </div>
          <span className={styles.minAge}>
            {'18'}
          </span>
          <span className={styles.maxAge}>
            {'70+'}
          </span>
        </div>
        {posMin_X !== null ? (
          <div
            className={styles.minOutput}
            // style={{ left: '2rem' }}
            style={{ left: posMin_X + 'px', top: posMin_Y + 'px' }}
          >
            {lowerVal}
          </div>
          ) : null
        }
        {posMax_X !== null ? (
          <div
            className={styles.maxOutput}
            // style={{ right: '3rem' }}
            style={{ left: posMax_X + 'px', top: posMax_Y + 'px' }}
          >
            {upperVal}
          </div>
          ) : null
        }
      </div>
    )
  }
}

export default Slider3;
