//Eventlisteners

const button = document.querySelector('button')
const element = document.querySelector('#selector')

//button.addEventListener('click', () => {
  //  console.log('you clicked me')
//})

//button.addEventListener('dbclick', () => {
  //  console.log('you double clicked me')
//})

button.addEventListener('click', () => {
    element.style = "background:aqua"
})