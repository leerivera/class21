// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let favHoliday;
favHoliday = "xmas"
console.log(favHoliday.toUpperCase())
//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let word = "bigHunk"
console.log(word.slice(-3))
// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
function subNums(n1, n2, n3, n4, n5){
    sum = n1 - n2 -n3 - n4 -n5
    console.log(Math.abs(sum))   
}
subNums(75, 45, 89, 68, 87)
// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function highAndLow(n1,n2,n3){
    let min = Math.min(n1,n2,n3)
    let max = Math.max(n1,n2,n3)
    console.log(`low${min} high${max}`)

}
highAndLow(39,34,76)

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
function headsOrTails(){
    let result = Math.random();
    if(result < .5) {
        return "heads"
    } else {
        return "tails"
    }
}

//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
