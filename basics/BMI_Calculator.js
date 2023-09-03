// const SumOfTwo = (a,b) =>{
//     return a+b;
// }

// console.log(SumOfTwo(5,6));


 /*
 
BMI = weight {kg} / (height){m} ^ 2

 */

const bmi = (weight,height) =>{
    return weight / (height*height);
}

console.log(bmi(45,1.58));