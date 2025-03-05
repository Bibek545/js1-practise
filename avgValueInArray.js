let array = [10,20,30,40,50];
let sum = 0;
let avgNumber;
  for(let i = 0; i< array.length; i++) {
     sum = sum + array[i]
  }
  avgNumber = sum / array.length;
  console.log(avgNumber);