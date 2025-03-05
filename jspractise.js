console.log('Bibek Hamal')
let myDog = 'DOG';
let combination = '';

for (let i = 0; i < myDog.length; i++) {
    
    for( let j = i; j < myDog.length; j++) {
        
        combination += myDog[j];
        console.log(combination);

    }
}

// const reverse1 = () => {
//     let myName = 'BIBEK';
//     let myArray = myName.split('');
//     // console.log(myArray); 
//      myArray.sort();
//      console.log(myArray.reverse());

// }
// reverse1();

const reverse = () => {
    let myName = 'BIBEK';
    let myArray = myName.split(''); 
    // console.log(myArray); 
    // console.log(myArray.sort()); 
    console.log(myArray.reverse()); 
};

reverse();



    let myString = [2,3,'bibek', 5,6,7,'a2'];
    let total = 0;
    for (item of myString) {
        if( typeof item === 'number') {
            total = total + item;
            
        }
    }
    console.log(total);

