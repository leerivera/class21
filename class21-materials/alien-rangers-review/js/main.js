//Arrays

//Create and array of tv shows. Loop through and print each show to the console
let shows = ["cheers", "dogs", "brats", "bitches"]
shows.forEach(show => console.log(show))
//Create and array of numbers
let nums =[21, 78, 98,100]

//Return a new array of numbers that includes every even number from the previous Arrays
let onlyEven = arr => arr.filter(n => n % 2 === 0)

console.log(onlyEven(nums))
//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number
function sumOfTwoLowHigh(arr){
    let sorted = arr.sort((a,b) => a -b)
    alert(sorted[1] + sorted[ sorted.length -2] )
}
sumOfTwoLowHigh([2,3,1,5,4])