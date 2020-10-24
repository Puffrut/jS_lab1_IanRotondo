//EXERCISE 1: The Fortune Teller
//Why pay a fortune teller when you can just program your fortune yourself? Store the following into variables: job title, geographic location, annual salary, company name. Output your fortune to the screen like so: "You will be a X in Y, making $N for Z."

let jobTitle = `Astronaut`
let geoLocation = `Hercolubus`
let annualSalary = `1,000,000`
let companyName = `Rosen Ritter`

console.log(`You will be a ${jobTitle} in ${geoLocation}, making $${annualSalary} for ${companyName}.`)

//EXERCISE 2: The Age Calculator
//Forgot how old someone is? Calculate it! Store the current year in a variable. Store their birth year in a variable. Calculate their age based on the stored values. Output them to the screen like so: "They are NN years old.", substituting the values.

let currentYear = `3050`
let birthYear = `12`
let currentAge = currentYear - birthYear
console.log(`They are ${currentAge} years old.`)

//EXERCISE 3: The Lifetime Supply Calculator
//Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more! Store your current age into a variable. Store a maximum age into a variable. Store an estimated amount per day (as a number). Calculate how many you would eat total for the rest of your life. Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

let myAge = `96`
let maximumAge =`3080`
let dailyAmount = `52`
let totalEaten = (maximumAge - myAge) * dailyAmount

console.log(`You will need ${totalEaten} to last you until the ripe old age of ${maximumAge}`)

//EXERCISE 4: The Geometrizer
//Calculate properties of a circle, using the definitions here. Store a radius into a variable. Calculate the circumference based on the radius, and output "The circumference is NN". Calculate the area based on the radius, and output "The area is NN".

let radius =`360`
let pie = `3.14`
let circumference = 2*(pie * radius)
let area = pie * radius * radius

console.log(`"The circumference is ${circumference}". "The area is ${area}".`)

//EXERCISE 5: The Temperature Converter
//It's hot out! Let's make a converter based on the steps here. Store a celsius temperature into a variable. Convert it to fahrenheit and output "NN°C is NN°F".  Now store a fahrenheit temperature into a variable. Convert it to celsius and output "NN°F is NN°C."

let celsius = `30`
let fahrenheit = (celsius * 9/5) + 32
let fTemp = `86`
let conversion = (fahrenheit - 32) * 5 / 9

console.log(`"${celsius}°C is ${fahrenheit}°F".`)
console.log(`"${fTemp} is ${conversion}°C."`)