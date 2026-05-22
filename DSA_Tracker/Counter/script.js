const addBtn = document.querySelector('.button1')
const reduceBtn = document.querySelector('.button2')
const resetBtn = document.querySelector('.button3')

const countText = document.querySelector('#countbtn')

let count = 0

addBtn.addEventListener('click', function () {
    count++
    countText.innerText = count
})

reduceBtn.addEventListener('click', function () {
    count--
    countText.innerText = count
})

resetBtn.addEventListener('click', function () {
    count = 0
    countText.innerText = count
})