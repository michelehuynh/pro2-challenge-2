// Update time on load
window.onload = Time;
setInterval(Time, 1000);

var background = document.getElementById('background');
var greeting = document.getElementById('greeting');

// Set daily background
function Day() {
  background.style.background = "url('./img/Day.png')";
  background.style.backgroundSize = 'cover';
  greeting.innerHTML = '☀️ Hello Martian. Have a nice day.';
}

// Set nightly background
function Night() {
  background.style.background = "url('./img/Night.png')";
  background.style.backgroundSize = 'cover';
  greeting.innerHTML = "🌛 Good evening. I hope you're resting.";
}

// Function to get time
function Time() {
  // Get time
  var time = new Date();

  var hr = time.getHours();
  var min = time.getMinutes();
  var sec = time.getSeconds();

  // Add zero infront of time units that are less than 10
  if (hr < 10) {
    hr = '0' + time.getHours();
  }

  if (min < 10) {
    min = '0' + time.getMinutes();
  }

  if (sec < 10) {
    sec = '0' + time.getSeconds();
  }

  // Inject time units into HTML using DOM technique
  document.getElementById('hr').innerHTML = hr;
  document.getElementById('min').innerHTML = min;
  document.getElementById('sec').innerHTML = sec;

  // Set day/night background based on the hours units
  function Background() {
    if (hr > 18 || hr < 6) {
      Night();
    } else {
      Day();
    }
  }

  Background();
}

// Change color modes on button click
var btn_light = document.getElementById('light');
var btn_dark = document.getElementById('dark');
var btn_pink = document.getElementById('pink');
var container = document.getElementById('container');
var clock = document.getElementById('time');

// Change to light color mode
btn_light.onclick = function() {
  container.style.background = 'white';
  container.style.boxShadow =
    '0px 4px 50px rgba(255, 255, 255, 0.25), inset 0px -4px 0px rgba(0, 0, 0, 0.19)';
  time.style.color = 'black';
};

// Change to dark color mode
btn_dark.onclick = function() {
  container.style.background = 'black';
  container.style.boxShadow =
    '0px 4px 50px rgba(0, 0, 0, 0.25), inset 0px -4px 0px rgba(255, 255, 255, 0.19)';
  time.style.color = 'white';
};

btn_pink.onclick = function() {
  container.style.background = 'pink';
  container.style.boxShadow =
    '0px 4px 50px rgba(255, 255, 255, 0.25), inset 0px -4px 0px rgba(0, 0, 0, 0.19)';
  time.style.color = 'black';
};
