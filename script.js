console.log('retrieve previous result')
document.getElementById('retrieve').addEventListener('click', function () {
    document.getElementById('retrieving').innerHTML = localStorage.getItem("Value") //retrieving local storage
})
console.log('clear local storage')
document.getElementById('clearall').addEventListener('click', function () {
    localStorage.clear() //clear local storage
    document.getElementById('retrieving').innerHTML = ""
})

console.log('get random quotes: AJAX fetch')
//<button class="btn btn-outline-success my-2 my-sm-0" type="submit">convert</button>
const url = "https://github.com/Vijayarajamayuri/p2Stylesheet/raw/master/image.jpg"
document.getElementById('simpbutt').addEventListener('mouseover', function() {
    fetch(url) //fetch is the simplifed version of xmlhttprequest
    .then((res) => { return res.json() }) //receiving returning response as JSON application
    .then((data) => {            // selecting which data retrieved from returned response to be displayed on html
        data.forEach((item) => {
            const { quote, character } = item
            const result = 'Quote : "${quote}"  By : ${character}'
            document.getElementById('simpsons').innerHTML = result;
        });
    })
    .catch(function (error) {
        console.log(JSON.stringify(error)); //logs in console whenever HTTP response error occurs (failed HTTP response handling)
    })
})
console.log('Script End')