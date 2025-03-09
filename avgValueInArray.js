let array = [10,20,30,40,50];
let sum = 0;
let avgNumber;
  for(let i = 0; i< array.length; i++) {
     sum = sum + array[i]
  }
  avgNumber = sum / array.length;
  console.log(avgNumber);


  // Write your function here:
  //for truthyOrFalsy
const truthyOrFalsy = value => {
    if (truthyOrFalsy === value) {
      return true
    } else {
      return false
    }
  }
  
  // Uncomment the line below when you're ready to try out your function
  console.log(truthyOrFalsy(0)) // Should print false
  
  // We encourage you to add more function calls of your own to test your code!