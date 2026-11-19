//1. Convert the string "123" to a number and add 7.

let sNum = "123";
let num = Number(sNum) 
let newNum = num + 7;
console.log(newNum);

//2. Check if the given variable is falsy and return "Invalid" if it is.

const input = 0;

if (input == false) {
  console.log("Invalid");
} else {
  console.log("Valid");
}


//3. Use for loop to print all numbers between 1 and 10, skipping even numbers using continue 

for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    continue;
  } else {
    console.log(i);
  }
}

//4. Create an array of numbers and return only the even numbers using filter method.

const arrNumbers = [1, 2, 3, 4, 5];

const evenNumbers = arrNumbers.filter((num, index) => {
  if (num % 2 == 0) {
    return num;
  }
});

console.log(evenNumbers);


//5. Use the spread operator to merge two arrays, then return the merged array. 

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const newArr = [...arr1, ...arr2];

console.log(newArr);



//6. Use a switch statement to return the day of the week given a number (1 = Sunday …., 7 = Saturday). 

let day = 2;

switch (day) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;

  default:
    console.log("Invalid");
    break;
}



//7. Create an array of strings and return their lengths using map method 

const arrOfStrings = ["a", "ab", "abc"];
const result = arrOfStrings.map((value, index) => {
  return value.length;
});

console.log(result);



//8. Write a function that checks if a number is divisible by 3 and 5. 

function divisibilityCheck(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    console.log("Divisible by both");
  } else {
    console.log("Not Divisible by both");
  }
}

divisibilityCheck(15);



//9. Write a function using arrow syntax to return the square of a number 

const square = number => number ** 2;
console.log(square(5));


//10.Write a function that destructures an object to extract values and returns a formatted string. 

const person = {
  name: "john",
  age: 25,
};

function displayData(userData) {
  const { name: userName } = userData;
  const { age: userAge } = userData;
  return `${userName} is ${userAge} years old`;
}

console.log(displayData(person));


//11.Write a function that accepts multiple parameters (two or more) and returns their sum. (0.5 Grade)

const arr = [1, 2, 3, 4, 5];

function sum(sumNumbers) {
  let total = 0;
  for (let i = 0; i < sumNumbers.length; i++) {
    total += sumNumbers[i];
  }

  return total;
}

console.log(sum(arr));


//12. Write a function that returns a promise which resolves after 3 seconds with a 'Success' message. (0.5 Grade)

function successAlert() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Success");
    }, 3000);
  });
}

successAlert().then((value) => {
  console.log(value);
});




//13. Write a function to find the largest number in an array. (0.5 Grade)

const arrayNumbers = [1, 3, 7, 2, 4];

function largestNumber(arrNum) {
  let largestNum = arrNum[0];
  for (let i = 0; i < arrNum.length; i++) {
    if (largestNum >= arrNum[i]) {
      continue;
    } else {
      largestNum = arrNum[i];
    }
  }
  return largestNum;
}

const resultN = largestNumber(arrayNumbers);

console.log(resultN);




//14. Write a function that takes an object and returns an array containing only its keys. 

const user = {
  name: "john",
  age: 25,
};

function oKeys(userData) {
  return Object.keys(userData);
}

const oKey = oKeys(user);
console.log(oKey);



//15. Write a function that splits a string into an array of words based on spaces.

const sentence = "The quick brown fox";

function Spliter(sSentence) {
  return sSentence.split(" ");
}
const sResult = sentence.split(" ");

console.log(sResult);
