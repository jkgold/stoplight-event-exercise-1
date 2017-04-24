(function() {
  'use strict';

  // YOUR CODE HERE
  const stopButton = document.querySelector("#stopButton");
  const slowButton = document.querySelector("#slowButton");
  const goButton = document.querySelector("#goButton");

  const stopLight = document.querySelector("#stopLight");
  const slowLight = document.querySelector("#slowLight");
  const goLight = document.querySelector("#goLight");

  stopButton.addEventListener('click', () => {
    stopLight.classList.toggle('stop');
  });

  slowButton.addEventListener('click', () => {
    slowLight.classList.toggle('slow');
  });

goButton.addEventListener('click', () => {
  goLight.classList.toggle('go');
})

const handleMouseEnter = (event) => {
  console.log('Entered ${event.target.textContent} button');
}
 const handleMouseLeave = (event) => {
   console.log('Left ${event.target.textContent} button');
 }

 stopButton.addEventListener('mouseenter', handleMouseEnter);

 slowButton.addEventListener('mouseenter', handleMouseEnter);

 goButton.addEventListener('mouseenter', handleMouseEnter);

 stopButton.addEventListener('mouseleave', handleMouseLeave);

 slowButton.addEventListener('mouseleave', handleMouseLeave);

 goButton.addEventListener('mouseleave', handleMouseLeave);



})();
