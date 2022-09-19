// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// const { exportAllDeclaration } = require("@babel/types")
// const { it } = require("node:test")
// const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.
describe("sentence", () => {
  it("Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.", () => {
    expect(sentence(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})

const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

///////////////GOOD FAILURE////////////////
// ReferenceError: sentence is not defined

// 20 | describe("sentence", () => {
// 21 |   it("Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.", () => {
// > 22 |     expect(sentence(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])

///////////////////////////////////////////////////////
// b) Create the function that makes the test pass.
// PSEUDO: This function required a lot of array accesors and iteration methods in order to retrieve the nessesary output.
//the task is to iterate over the array containing objects and return an array with the key:value pairs as a sentence. 
//I declared a function named sentence with the parameter name of array
//within the function i wanted it to return the array iterated with the high order function .map.
//within the iteration i wanted to iterate over the objects and target the key:values of names: and convert the strings to arrays seperating the characters with .split(" ")
//doing so would return me a array with the key:values of name into an array with the characters seperated and the key:value of occupation as is.
//doing this process we follow .split further by adding another high order function .map after it to return a new array with the condition to select the first character of the key:value names array .toUpperCase() the first character at index 0 using charAt(0) and we would add the remaining array using .slice(1)
//we follow .slice with a .join(" ") to join the characters of the array and addition to the create the sentence withe a string intorpilation of occupation. This is a very complex challenge that requires a lot of accesors and more than one iterable.
const sentence = (array) => {
  return array.map((value) => value.name.split(" ").map((value) => value.charAt(0).toUpperCase() + value.slice(1)).join(" ") + ` is ${value.occupation}.`)
}

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.


describe("remainders", () => {
  it("Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.", () => {
    expect(remainders(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(remainders(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

///////////////GOOD FAILURE////////////////

// ReferenceError: remainders is not defined

// 57 | describe("remainders", () => {
// 58 |   it("Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.", () => {
// > 59 |     expect(remainder

///////////////////////////////////////////////////////


// b) Create the function that makes the test pass.

// PSEUDO: This challenge requires us to filter a out the array of mixed data and return only the numbers.
//addition to that filer the challenge is expecting that the numbers to return a remainder when divided by 3.
//to do this i declared my function to be named remainders with a parameter named array.
//within the function i am return the array iterated using the high order function .filter to filter within the values and select the values that are the data type of numbers. to specifically do that i used the typeof operator that lets me indicate what type of data within the array i want to specifically return.
//following that iteration i used another high order function that lets me return a new array with different return values.
//in this case i used the high order function .map that will iterate over the number values and divide them by using a modulo sign to return the remainder.
const remainders = (array) => {
  return array.filter((value) => typeof value ===  "number").map(value => value % 3)
}
// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.
describe("cubed", () => {
  it("Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.", () => {
    expect(cubed(cubeAndSum1)).toEqual(99)
    expect(cubed(cubeAndSum2)).toEqual(1125)
  })
})

const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125


// ReferenceError: cubed is not defined

// 96 | describe("cubed", () => {
// 97 |   it("CCreate a function that takes in an array of numbers and returns the sum of all the numbers cubed.", () => {
// >  98 |     expect(cubed(cubeAndSum1)).toEqual(99)
//    |     ^


// b) Create the function that makes the test pass.

// PSEUDO: For this challenge we iterate over the array to return the values cubed then add the total sum of those cubed values.
//the first step is to declare a function which i called cubed. the function will take a parameter called array.
//the function will return an array iterated with .map multiplying every value in the array by itself 3 times.
//doing this will return the array with every value cubed.
//the next step is add the total sum of the array to equal the expected output.
// i did some exterior research and learned a solution to use a high order function called .reduce() that in simple way of explaining can return the sum of all the elementes in an array.
//at the end of the first array i followed it with the high order function .reduce() 
//inside the .reduce i used two built in parameter for value and index.
//within the condition portion, it is set so that the first value is iterated and added with the rest of the values or until the length of the array.


const cubed = (array) => {
  return array.map(value => value * value * value).reduce((value, i) => value + i)
}