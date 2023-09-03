// Will only run on browser
// let tweet = prompt("Enter your tweet");
// alert("You have written " + tweet.length +" characters");
// alert(tweet.slice(0,140));


let your_name = prompt("Please enter your name");

let your_name_start = your_name.slice(0,1);
your_name_start = your_name_start.toUpperCase();

alert("Hello, " + your_name_start + your_name.slice(1,your_name.length)); 