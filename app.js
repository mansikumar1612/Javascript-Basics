//DOM
//const element = document.getElementById('selector')

//const element = document.getElementsByClassName('heading')

//const element = document.getElementsByTagName('div')

const element = document.querySelector('h3.heading') //perform all of these three
//console.log(element)
//query selector return only one element
//for selecting all you have to use queryselectorall

//methods
//element.innerHTML = "This is from JS"

//element.style.color="blue"
//element.style.fontsize="40px"
//element.style="display:none"

//console.log(element.classList)
//element.classList.add('five')
//console.log(element.classList)
//element.classList.remove('one')
//console.log(element.classList)

//const body = document.querySelector('body')
//console.log(body.classList.toggle('dark'))

const value = element.classList.contains('three')
console.log(value)