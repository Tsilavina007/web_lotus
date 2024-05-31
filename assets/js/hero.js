const hero = document.querySelector('#hero-bg')
const colors = ['#f33cfc', '#f33cfc']
const SQUARES = 30000

for(let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseout', () => removeColor(square))

    hero.appendChild(square)
}


function setColor(element) {
    const color = getRandomColor()
    element.style.background = color

}

function removeColor(element) {
   element.style.background = 'transparent'
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}
