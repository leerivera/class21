//Create a stopwatch object that has four properties and three methods
let stopwatch = {}

stopwatch.color = "black"
stopwatch.brand ="cisco"
stopwatch.shape = "round"
stopwatch.size = "small"

stopwatch.start = function(){
    console.log("start")
}

stopwatch.stop = function(){
    console.log("stop")
}

stopwatch.sayBrand = function(){
    console.log(stopwatch.brand)
}