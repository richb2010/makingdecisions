////////// PROBLEM 1 //////////
/*
  Create a variable called 'lovesCode' and set it equal to true. 
  Check to see if 'lovesCode' is equal to true or false. 
  If it is true, console log "I love to code!"
  If it is not, console log "Coding has its challenges."
*/

/// Problem 1 Love Code ////
let lovesCode = true

if (lovesCode === true) {
    console.log('I love to code!')
} else {
    console.log("Coding has it's challenges.")
}

let loveCodes = false

if (lovesCode === false) {
    console.log("Coding has it's challenges.")
} else {
    console.log('I love to code!')
}

/// Problem 2 /////

var amysAge = 29;
var brittinisAge = 43;
var amysBrithYear = 1991;
var brittinisBirthYear = 1986;

if (amysAge > brittinisAge) {
    console.log('Amy is older than Brittani')
} else if (brittinisAge > amysAge) {
    console.log('Brittini is older than Amy')
} else {
    console.log('Amy and Brittani are the same age.')
}

// /////Problem 3///////////

if (amysBrithYear === brittinisBirthYear) {
    console.log('Amy and Brittani were born in the same year.')
} else {
    console.log('Amy and Brittani were born in the same year.')
}

if (amysBrithYear === brittinisBirthYear) {
    console.log('Amy and Brittani were born in the different year')
} else {
    console.log('Amy and Brittani were born in the different year')
}


////////// PROBLEM 4 //////////

let temperature = 55;
let rain = true;

/*
  Using an if statement and a comparison operator, create code that will log a suggestion on what type of clothes one should wear for the day, based on the above temperature and rain.
  If it is 80 degrees or above, and raining, one should wear a t-shirt and take an umbrella. If it is between 60 and 80 degrees, and raining, one should wear a rain-jacket. If it is 60 degrees or below, one should wear a jacket and carry an umbrella. Come up with your own clothing suggestions based on those temperature parameters when it is not raining.
*/

if (temperature > 55 && rain) {
    console.log("wear a t-shirt and take an umbrella with you today")
} else if (temperature > 60 && rain) {
    console.log('better wear a jacket today')
} else if (temperature > 80 && !rain) {
    console.log('Looks like a day for tank top')
} else if (temperature > 60 && !rain) {
    console.log('You might want a light jacket today')
} else {
    console.log('It will be a bit chilly out there today')
}

if (temperature < 20 && snow) {
    console.log("Wear a coat and take snow boots wth today")
} else if (temperature < 30 && snow) {
    console.log('better wear a light coat today')
} else if (temperature < 40 && !rain) {
    console.log('looks like good today to wear shorts')
} else if (temperature < 20 && !snow) {
    console.log('You might want wear a light coat')
} else {
    console.log('It will be very cold outside')
}

////////// PROBLEM 5 //////////

/*
  Create a for-loop that runs 10 times, and on each iteration logs the word 'hello'.
*/

//CODE HERE

for (let i = 0; i < 10; i++) {
    console.log('hello')
}

for (let i = 0; i < 10; i++) {
    console.log('I love you')
}
for (let i = 0; i < 10; i++) {
    console.log('Goodbye')
}
////////// PROBLEM 6 //////////

/*
  Create a for-loop that runs 10 times, logging the numbers 1 through 10. Ex, on the first iteration it would log 1, on the second iteration it would log 2.
*/

//CODE HERE
for (let i = 0; i < 11; i++) {
    console.log(i)
}

////////// PROBLEM 7 //////////

/*
  Create a for-loop that logs the numbers 0 through 10 backwards. Ex, on the first iteration it would log 10, on the second iteration it would log 9.
*/

//CODE HERE
for (let i = 10; i > 0; i--) {
    console.log(i)
}