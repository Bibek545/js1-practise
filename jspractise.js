// console.log('Bibek Hamal')
// let myDog = 'DOG';
// let combination = '';

// for (let i = 0; i < myDog.length; i++) {
    
//     for( let j = i; j < myDog.length; j++) {
        
//         combination += myDog[j];
//         console.log(combination);

//     }
// }

// // const reverse1 = () => {
// //     let myName = 'BIBEK';
// //     let myArray = myName.split('');
// //     // console.log(myArray); 
// //      myArray.sort();
// //      console.log(myArray.reverse());

// // }
// // reverse1();

// const reverse = () => {
//     let myName = 'BIBEK';
//     let myArray = myName.split(''); 
//     // console.log(myArray); 
//     // console.log(myArray.sort()); 
//     console.log(myArray.reverse()); 
// };

// reverse();



//     let myString = [2,3,'bibek', 5,6,7,'a2'];
//     let total = 0;
//     for (item of myString) {
//         if( typeof item === 'number') {
//             total = total + item;
            
//         }
//     }
//     console.log(total);



//     class BankAccount {
//         constructor(accountNumber, accountHolder, name, balance) {
//             this.accountNumber = accountNumber;
//             // this.accountHolder = accountHolder;
//             this.name = name;
//             this.balance = balance;
//         }
//         deposit(amount) {
//             this.balance += amount;
//             console.log(`'Deposited amount is: ' ${amount}`);

//         }
//         withdraw(amount) {
//             // conditon here if not enough money
//             if (amount > this.balance  ) {
//                 console.log('Not sufficient money')
//                 return false;
//             } else {
//                 this.balance -= amount;
//                 return true;
//             }            
//             console.log(`'Withdrawn amount is: ' ${amount}`);
//         }
//         transferMoney(personobj, amount) {
//             //1. withdraw from the account
//             if (this.withdraw(amount)) {

            
//             //2. deposit into new account
//             personobj.deposit(amount); 
//             } else {
//                 console.log('Transfer unsuccessful.')
//             }
//         }
//     }

//     // new_account = BankAccount("Bibek", 123456, $5000 )
//     //creating an instances
//    const person1 = new   BankAccount("Bibek", 123456, 5000 );
//    const person2 = new   BankAccount("Hamal", 23456, 8000 );

    
//    console.log(person1, person2);
//    console.log(person2.withdraw(500));
//    console.log(person2.transferMoney(person1, 500));



