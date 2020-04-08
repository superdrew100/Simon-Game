console.log("app.js is linked")
const button1 = document.getElementById('button1')
const button2 = document.getElementById('button2')
const button3 = document.getElementById('button3')
const button4 = document.getElementById('button4')

button1.addEventListener('click', function () {
    console.log('button1 is pressed')
})

button2.addEventListener('click', function () {
    console.log('button2 is pressed')
})

button3.addEventListener('click', function () {
    console.log('button3 is pressed')
})

button4.addEventListener('click', function () {
    console.log('button4 is pressed')
})