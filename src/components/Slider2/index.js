import React, { Component } from 'react';
import cn from 'classnames';
import styles from './slider.css';

export class Slider2 extends Component {
  render() {
    return (
      <div className={styles.container}>
        <form>
            <div data-role="rangeslider">
                <label for="range-1a">Rangeslider:</label>
                <input type="range" name="range-1a" id="range-1a" min="18" max="70" value="40" data-popup-enabled="true" data-show-value="true"/>
                <label for="range-1b">Rangeslider:</label>
                <input type="range" name="range-1b" id="range-1b" min="18" max="70" value="70" data-popup-enabled="true" data-show-value="true"/>
            </div>
        </form>
      </div>
    )
  }
}

export default Slider2;
