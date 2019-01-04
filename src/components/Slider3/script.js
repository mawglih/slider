var lowerSlider = document.querySelector('#lower'),
   upperSlider = document.querySelector('#upper'),
   lowerVal = parseInt(lowerSlider.value);
   upperVal = parseInt(upperSlider.value);

upperSlider.oninput = function() {
   lowerVal = parseInt(lowerSlider.value);
   upperVal = parseInt(upperSlider.value);
   
   if (upperVal < lowerVal + 4) {
      lowerSlider.value = upperVal - 4;
      
      if (lowerVal == lowerSlider.min) {
         upperSlider.value = 4;
      }
   }
};


lowerSlider.oninput = function() {
   lowerVal = parseInt(lowerSlider.value);
   upperVal = parseInt(upperSlider.value);
   
   if (lowerVal > upperVal - 4) {
      upperSlider.value = lowerVal + 4;
      
      if (upperVal == upperSlider.max) {
         lowerSlider.value = parseInt(upperSlider.max) - 4;
      }

   }
};


var myRange = document.querySelector('#myRange');
var myValue = document.querySelector('#myValue');
var myUnits = 'myUnits';
var off = myRange.offsetWidth / (parseInt(myRange.max) - parseInt(myRange.min));
var px =  ((myRange.valueAsNumber - parseInt(myRange.min)) * off) - (myValue.offsetParent.offsetWidth / 2);

  myValue.parentElement.style.left = px + 'px';
  myValue.parentElement.style.top = myRange.offsetHeight + 'px';
  myValue.innerHTML = myRange.value + ' ' + myUnits;

  myRange.oninput =function(){
    let px = ((myRange.valueAsNumber - parseInt(myRange.min)) * off) - (myValue.offsetWidth / 2);
    myValue.innerHTML = myRange.value + ' ' + myUnits;
    myValue.parentElement.style.left = px + 'px';
  };
