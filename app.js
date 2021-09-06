//const rock = document.querySelector('#rock')
//const paper = document.querySelector('#paper')
//const scissor = document.querySelector('#scissor')

//function
//var Name = 'mansi'
function logName(Name="John Doe" , age = '21') {
  //console.log('Mansi')
  console.log(Name + " your age " + age)

  //Never Misspell the function keyword
  //A function can have multiple parameter
  //You can set default values for the parameters
  //Any variable you define inside a function's body is local to that function
}
//console.log(Name)
function add(a=0,b=0)
{
  //const sum = a+b
  //return sum
  return a + b
}
//console.log(sum)
//add(12,99)
//const result = add(12,99)
//console.log(result)
const result = add()
console.log(result)


