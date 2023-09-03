// let names = ["Bhavya" , "Shivang","Mukesh","Amar","Harshit"];

// let check = "Shivang";

// // names.forEach(name => {
// //     if(check === name){
// //         console.log(check + " is in the names list");
// //     }
// // });


// if(names.includes(check))
// {
//     console.log(check + " is in the names list");
// }

let output = [];

for (let i = 0; i < 100; i++) {
    if (i % 3 === 0){
        output.push("Fizz");
    }

    else if(i % 5 === 0) output.push("Buzz");
    
    else if(i % 3 === 0 && i % 5 ===0) output.push("FizzBuzz");

    else output.push(i);
}

console.log(output);