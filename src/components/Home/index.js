import React from 'react';
import styles from './home.css';
import Slider3 from '../Slider3';

const Home = () => {
  return (
    <div>
      <form>
      <h2>Custom slider</h2>
        <div className={styles.slidecontainer}>
        
          <input
            type="range"
            min="18"
            max="80"
            // value="30"
            className={styles.slider}
            id="range1"
            // onChange={e => value = e.target.value}
          />
          {/* <input
            type="range"
            min="18"
            max="80"
            // value="50"
            className={styles.slider}
            id="range2"
            // onChange={e => value = e.target.value}
          /> */}
        </div>
      </form>
      <hr/>
      <Slider3/>
    </div>
  )
}

export default Home;
