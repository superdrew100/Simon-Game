console.log("app.js is linked")
const button1 = document.getElementById('button1')
const button2 = document.getElementById('button2')
const button3 = document.getElementById('button3')
const button4 = document.getElementById('button4')
const startButton = document.getElementById('startButton')
sound = true

const userButtonArray = []
const computerPatternArray = []



function playBackComputerPatternArray() {
    setInterval (function(){ 
        for(i =0; i <= computerPatternArray.length; i++){
            const number = (computerPatternArray[i-1])
            console.log(i)
            if (number === 1){ 
                console.log('1 flash')
                if (sound) {
                    let audio = document.getElementById("clip1")
                    audio.play()
                  }
            }
            if (number === 2){
                console.log('2 flash')
                if (sound) {
                    let audio = document.getElementById("clip2")
                    audio.play()
                  }
            }
            if (number === 3){
                console.log('3 flash')
                if (sound) {
                    let audio = document.getElementById("clip3")
                    audio.play()
                  }
            }
            if (number === 4){
                console.log('4 flash')
                if (sound) {
                    let audio = document.getElementById("clip4")
                    audio.play()
                  }
            }
        }
}, 10000)
}

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
            computerPatternArray.push(getRandomInt(1, 5))
            playBackComputerPatternArray()
        }
        if (JSON.stringify(userButtonArray) !== JSON.stringify(computerPatternArray)) {
            console.log("Both strings do not match")
            userButtonArray.length = 0
            computerPatternArray.length = 0
        }
    }

})
//Flash functions----------------------------------------------
function one() {
if (sound) {
    let audio = document.getElementById("clip1")
    audio.play()
  }
  if(document.getElementById("clip1").currentTime > 0){
  button1.style.backgroundColor = "lightgreen"}
  else{button1.style.backgroundColor = "red"
  }
}

//Buttons-----------------------------------------------------------

startButton.addEventListener('click', function(){
    console.log("game has started")
    computerPatternArray.push(getRandomInt(1, 5))
    playBackComputerPatternArray()

 
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
