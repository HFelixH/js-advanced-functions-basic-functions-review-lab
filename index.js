// Your code here
function saturdayFun(activity='roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

console.log(saturdayFun())
console.log(saturdayFun("bathe my dog"))

//===============

function mondayWork(activity='go to the office') {
    return `This Monday, I will ${activity}.`
}

console.log(mondayWork())
console.log(mondayWork("work from home"))

//===============

let wrapAdjective = function(wrap="*") {
    return function(adjective="function exists") {
      return `You are ${wrap}${adjective}${wrap}!`
    }
  }

  //let result = wrapAdjective()
  //let emphatic = result("a hard worker") 

  let result = wrapAdjective("||")
  let emphatic = result("a dedicated programmer") 

  console.log(emphatic)

  //==============

const Calculator = {
    add: function(a,b) {
        return a + b
    },
    subtract: function(a,b) {
        return a - b
    } ,
    multiply: function(a,b) {
        return a * b
      },
    divide: function(a,b) {
        return a / b;
      }
}

console.log(Calculator.add(1,3))

console.log(Calculator.subtract(1,3))

console.log(Calculator.multiply(1,3))

console.log(Calculator.divide(10,5))

  //==============

  let actionApplyer = function(start, ray) {
    let a = start
  
    for (let i = 0; i < ray.length; i++ ){
      a = ray[i](a)
    }
  
    return a
  }

console.log(actionApplyer(0, []))

  let message = "13, multiplied by 2, added to 1000 and then modulo 7 is 4. Apply each function in the Array of functions on the given base (13) OR on the result of the use of the previous function to get this result"
        arrayOfTransforms = [
          function(a){ return a * 2 },
          function(a){ return a + 1000},
          function(a){ return a % 7 }
        ]

console.log(`${actionApplyer(13, arrayOfTransforms)} ${message}`)