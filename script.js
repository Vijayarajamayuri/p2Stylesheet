console.log('retrieve previous result')
document.getElementById('retrieve').addEventListener('click', function () {
    document.getElementById('retrieving').innerHTML = localStorage.getItem("Value") //retrieving local storage
})
console.log('clear local storage')
document.getElementById('clearall').addEventListener('click', function () {
    localStorage.clear() //clear local storage
    document.getElementById('retrieving').innerHTML = ""
})
document.getElementById('simpbutt').addEventListener('click',function(){
    // Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("simpsons").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("simpsons").innerHTML = "EXPIRED";
  }
}, 1000);
})
 
