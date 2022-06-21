let userName = "Tina",
  userSurname = "Kakhberidze";

const birthYear = 1996;
let userEmail = "example@gmail. ",
  userAge = 25,
  myHobby = "reading",
  currentYear = 2022,
  myBoolTrue = true,
  myBoolFalse = false,
  myUndefined = undefined,
  myNull = null;

console.log(typeof userName);
console.log(typeof birthYear);
console.log(typeof userEmail);
console.log(typeof userAge);
console.log(typeof myHobby);
console.log(typeof currentYear);
console.log(typeof myBoolTrue);
console.log(typeof myBoolFalse);
console.log(typeof myUndefined);
console.log(typeof myNull);

let myNum1 = 9;
let myNum2 = 4;

let addintion = myNum1 + myNum1;
console.log("addintion", addintion);

// let substraction = myNum1 - myNum1;
// console.log("substraction", substraction);

let multiplication = myNum1 * myNum1;
console.log("multiplication", multiplication);

let division = myNum1 / myNum1;
console.log("division", division);

let modulo = myNum1 % myNum2;
console.log("modulo", modulo);

let power = myNum1 ** myNum2;
console.log("power", power);

let substraction = currentYear - birthYear;
console.log("substraction", substraction);

document.querySelector("h1").innerText = userName;

let myText =
  " My name is " +
  userName +
  " I am " +
  substraction +
  " old and my hobby is reading. ";

let myText2 = `My name is  ${userName} I am ${substraction} old and my hobby is reading.`;

console.log(myText);
console.log(myText2);
