const overlay = document.getElementById('overlay')
const closeBtn = document.getElementById('close')
const addCartBtn = document.getElementById('addCartBtn')
const cartMenu = document.getElementById('cartMenu')

const increase = document.getElementById('increase')
const decrease = document.getElementById('decrease')
const value = document.getElementById('value')

const p1 = document.getElementById('p1')
const p2 = document.getElementById('p2')
const p3 = document.getElementById('p3')
const p4 = document.getElementById('p4')

p1.addEventListener('click', () =>{
    overlay.style.visibility = 'visible'
})

closeBtn.addEventListener('click', () => {
    overlay.style.visibility = 'hidden'
})

addCartBtn.addEventListener('mouseover', () =>{
    cartMenu.style.visibility = 'visible'
})

function counter() {
    
}
