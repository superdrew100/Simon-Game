console.log("app.js is linked")
const button1 = document.getElementById('button1')
const button2 = document.getElementById('button2')
const button3 = document.getElementById('button3')
const button4 = document.getElementById('button4')
const startButton = document.getElementById('startButton')

const userButtonArray = []
const computerPatternArray = []

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }


document.addEventListener('click', function() {
    //console.log("game has started")
    //computerPatternArray.push(getRandomInt(1, 5))
    console.log("a button is pressed")
    if (userButtonArray.length === computerPatternArray.length) {
        if (JSON.stringify(userButtonArray) === JSON.stringify(computerPatternArray)) {
            console.log("Both strings match!")
        }
        if (JSON.stringify(userButtonArray) !== JSON.stringify(computerPatternArray)) {
            console.log("Both strings do not match")
        }
    }

})



//Buttons-----------------------------------------------------------

startButton.addEventListener('click', function(){
    console.log("game has started")
    computerPatternArray.push(getRandomInt(1, 5))

 
})

button1.addEventListener('click', function () {
    console.log('button1 is pressed')
    userButtonArray.push(1)


})

button2.addEventListener('click', function () {
    console.log('button2 is pressed')
    userButtonArray.push(2)

})

button3.addEventListener('click', function () {
    console.log('button3 is pressed')
    userButtonArray.push(3)

})

button4.addEventListener('click', function () {
    console.log('button4 is pressed')
    userButtonArray.push(4)

})