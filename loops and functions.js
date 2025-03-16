// creating a function that takes two parameter and reruns the favorite color shirt
const colorMessage= (favoriteColor, shirtColor) => {
    if(favoriteColor === shirtColor) {
      return 'The shirt is your favorite color!'
    } else {
      return 'That is a nice color!'
    }
  
  }
  console.log(colorMessage('red', 'red'));

  //Create a function isEven() that takes a number as its only parameter. 
  // The function should return true if the number is even and false if the number is odd.

  // Write function below
const isEven = (number) => {
    if (number % 2 === 0) {
     return true
   
    } else {
     return false
    } 
   
   }
   console.log(isEven(7))

   // creating a function that takes the varibale x as its only parameter
   const numberDigits = (number) => {
    if ( number >= 0 && number <= 9) {
      return `One digit : ${number}`
    } else if( number >= 10 && number <= 99) {
      return `Two digits : ${number}`
    } else {
      return `The number is : ${number}`
    }
  }
  console.log(numberDigits(10))