import React, { Component } from 'react';
// import cn from 'classnames';
import styles from './slider.css';

export class Slider extends Component {
  state = {
    slots: 52,
    start: 18,
    end: 70,
    labelMode: 'mid',
  }

  onDragOver = (e) => {
    e.preventDefault();
  }

  onDragStart = (e) => {
    let slider  = e.target.dataset.slider;
    this.sliderType = slider;
  }

  onDrop = (e, target) => {
    let source = this.sliderType;
    let slot = Number(e.target.dataset.slot);
    
   if (isNaN(slot)) return;
    
    if (source === "min") {
      if (slot >= this.state.end) return;
      this.setState({
        start: slot
      },()=>{
        console.log(this.state);
      })
    } else if (source === "max") {
      if (slot <= this.state.start) return;
      this.setState({
        end: slot
      },()=>{
        console.log(this.state);
      })
    }
   this.sliderType = null;
  }

  MinSlider=()=> {
    return (
      <div data-slider="min" 
        onDragStart={this.onDragStart} 
        onTouchStart={this.onDragStart}
        draggable className="slider-thumb slider-thumb-min">
      </div>
    );
  }

  MaxSlider=()=> {
    return (
      <div data-slider="max" 
        onDragStart={this.onDragStart}  
        onTouchStart={this.onDragStart}
        draggable className="slider-thumb slider-thumb-max">        
      </div>
     );
  }

  render() {
    const {
    slots,
    start,
    end,
    // labelMode,
  } = this.state;
    const {
      sliderName,
      sliderClass,
    } = this.props;
    const scale = [];
    const slider = [];
    const currentScale = [];
    let minThumb = null;
    let maxThumb = null;
    for (let i = 18; i <= slots; i++) {
      let label = '';
      label = i ;
      scale.push(
        <div
          className={styles.slotScale}
          key={i}
        >
          {label}
        </div>
      );
      let currentLabel = '';
      if( i === start || i === end) {
        currentLabel = i;
      }
      currentScale.push(
        <div
          key={i}
          className={styles.slotScale_selected}
        >
          {currentLabel}
        </div>
      )
      if (i === start) {
        minThumb = <this.MinSlider />
      } else if (i === end) {
          maxThumb = <this.MaxSlider />
      } else {
          minThumb = null;
          maxThumb = null;
      }

      let lineClass = "line";
        
      if (i >= start && i < end) {
        lineClass += " lineSelected";
      }
      slider.push(
        <div 
              data-slot={i}
              onDragOver={this.onDragOver} 
              onTouchMove = {this.onDragOver}
              onTouchEnd = {this.onDrop}
              onDrop = {this.onDrop}
              key={i} 
              className="slot">
                <div  data-slot={i} className={lineClass}/>
                <span className="scaleMark"></span>
                {minThumb}
                {maxThumb}
          </div>
      );
    }

    return (
      <div>
        <h2 className={styles.title}>
          {sliderName}
        </h2>
        <div className={styles[sliderClass]}>
          <div className={styles.container}>
            <div className={styles.scale}>
              {scale}
            </div>
            <div className={styles.slider}>
              {slider}
            </div>
            <div className={styles.currentSlider}>
              {currentScale}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Slider;
