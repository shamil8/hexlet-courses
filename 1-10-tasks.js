/**
* You can see these tasks here: hexlet.io/courses/introduction_to_programming
* You can try to decide these exercises if you don't know how, Then you need to see this doc. :) Thanks!
*/

// Task 1
const dnaToRna = (dna) => {
  let result = ''
  //const dnaArr = dna.split('')

  if (!dna.length) {
    return ''
  }

  for(let i = 0; i < dna.length; i++) {
    switch (dna[i]) {
      case 'G':
        result += 'C'
        break
      case 'C':
        result += 'G'
        break
      case 'T':
        result += 'A'
        break
      case 'A':
        result += 'U'
        break
      default:
        return null
    }
  }

  return result
}

// console.log(dnaToRna('ACNTG') === null)

// Task 2
const sumSquare = n => n === 1 ? 1 : n ** 2 + sumSquare(n - 1)

const squareSum = (n) => {
  let result = 0
  
  for(let i = 1; i <= n; i++) {
    result += i
  }

  return result ** 2
}

const sumSquareDifference = n => squareSum(n) - sumSquare(n)

// console.log(sumSquareDifference(10))

// Task 3
const reverseInt = num => Number((num < 0 ? '-' : '') + Math.abs(num).toString().split('').reverse().join(''))

// console.log(reverseInt(-123))

// Task 4
const invertCase = str => str.split('').map( item => item === item.toUpperCase() ? item.toLowerCase() : item.toUpperCase()).join('')

// console.log(invertCase('Hello, World!'))

// Task 5
const diff = (a, b) => Math.abs(Math.abs(a - b) >= 180 ? 360 - a - b : a - b) 

// console.log(diff(120, 280))

// Task 6
const areBracketsBalanced = str => {
  let countLeft = 0
  let countRight = 0

  str.split('').forEach(item => item === '(' ? countLeft++ : countRight++)
  
  return countLeft === countRight
}

// console.log(areBracketsBalanced('((()())'))

// Task 7
const ackermann = (m, n) => {
  if(m === 0) {
    return n + 1
  }

  if(m > 0 && n === 0) {
    return ackermann(m - 1, 1)
  }

  if(m > 0 && n > 0) {
    return ackermann(m - 1, ackermann(m, n - 1))
  }
}

// console.log(ackermann(2, 3)) // 9

// Task 8
const fizzBuzz = (begin, end) => {
  for(; begin <= end; begin++) {
    console.log(
      begin % 3 === 0 
      ? 'Fizz' + (
        begin % 5 === 0 
        ? 'Buzz'
        : ''
      )
      : (
        begin % 5 === 0 
        ? 'Buzz'
        : begin
      )

    )
  }  
}

// fizzBuzz(11, 20)

// Task 9
const isPowerOfThree = (num) => {
  if(num === 1) {
    return true  
  }

  return num % 3 === 0 ? isPowerOfThree(num / 3) : false
}

// console.log(isPowerOfThree(81)) // true

// Task 10
const reverse = str => str.split('').reverse().join('')

const reverse2 = (str) => {
  let result = ''
  for(let i = str.length - 1; i >= 0; i--) {
    result += str[i]
  }

  return result
}

// without reverse function!
const reverse3 = str => str.split('').map( (item, i, items) => items[items.length - i - 1]).join('')

// console.log(reverse('hexlet') === reverse2('hexlet') && reverse2('hexlet') === reverse3('hexlet'))
