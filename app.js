console.log("app.js is linked")
const button1 = document.getElementById('button1')
const button2 = document.getElementById('button2')
const button3 = document.getElementById('button3')
const button4 = document.getElementById('button4')

const userButtonArray = []
const computerPatternArray = [1, 2, 3]

document.addEventListener('click', function() {
    console.log("game has started")

})

if (userButtonArray.length === computerPatternArray.length) {
    if (JSON.stringify(userButtonArray) === JSON.stringify(computerPatternArray)) {
        console.log("Both strings match!")
    }
    if (JSON.stringify(userButtonArray) !== JSON.stringify(computerPatternArray)) {
        console.log("Both strings do not match")
    }
}


button1.addEventListener('click', function () {
    console.log('button1 is pressed')
    userButtonArray.push(1)

    if (userButtonArray.length === computerPatternArray.length) {
        if (JSON.stringify(userButtonArray) === JSON.stringify(computerPatternArray)) {
            console.log("Both strings match!")
        }
        if (JSON.stringify(userButtonArray) !== JSON.stringify(computerPatternArray)) {
            console.log("Both strings do not match")
        }
    }
})

button2.addEventListener('click', function () {
    console.log('button2 is pressed')
    userButtonArray.push(2)

    if (userButtonArray.length === computerPatternArray.length) {
        if (JSON.stringify(userButtonArray) === JSON.stringify(computerPatternArray)) {
            console.log("Both strings match!")
        }
        if (JSON.stringify(userButtonArray) !== JSON.stringify(computerPatternArray)) {
            console.log("Both strings do not match")
        }
    }
})

button3.addEventListener('click', function () {
    console.log('button3 is pressed')
    userButtonArray.push(3)

    if (userButtonArray.length === computerPatternArray.length) {
        if (JSON.stringify(userButtonArray) === JSON.stringify(computerPatternArray)) {
            console.log("Both strings match!")
        }
        if (JSON.stringify(userButtonArray) !== JSON.stringify(computerPatternArray)) {
            console.log("Both strings do not match")
        }
    }
})

button4.addEventListener('click', function () {
    console.log('button4 is pressed')
    userButtonArray.push(4)

    if (userButtonArray.length === computerPatternArray.length) {
        if (JSON.stringify(userButtonArray) === JSON.stringify(computerPatternArray)) {
            console.log("Both strings match!")
        }
        if (JSON.stringify(userButtonArray) !== JSON.stringify(computerPatternArray)) {
            console.log("Both strings do not match")
        }
    }
})