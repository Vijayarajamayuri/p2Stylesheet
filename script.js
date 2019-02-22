console.log('retrieve previous result')
document.getElementById('retrieve').addEventListener('click', function () {
    document.getElementById('retrieving').innerHTML = localStorage.getItem("Value") //retrieving local storage
})
console.log('clear local storage')
document.getElementById('clearall').addEventListener('click', function () {
    localStorage.clear() //clear local storage
    document.getElementById('retrieving').innerHTML = ""
})

