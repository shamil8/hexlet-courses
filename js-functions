// Js functions course
// step 3 (https://ru.hexlet.io/courses/js-functions/lessons/pure-functions/exercise_unit)
const isPrimeNum = (num) => {
  const startIter = 2

  if(!num || startIter > num) {
    return false
  }

  const iter = (end) => {
    if(num % end === 0) {
      return num === end
    }

    return iter(end + 1)
  }

  return iter(startIter)
}

// console.log(isPrimeNum(1))

// step 7
const average = (...nums) => nums.length ? _.sum(nums) / nums.length : null
// without lodash
const average2 = (...numbers) => {
  
  let result = null
 
  for(const num of numbers) {
    result += num
  }

  return numbers.length ? result / (numbers.length) : result
}

// console.log(average(3, 2, 5, -5))

const convert = (...dates) => {
  const result = []

  for(let date of dates) {
    date = new Date(...date) 
    result.push(date.toDateString())
  }

  return result
}

// console.log(convert([1993, 3, 24], [1997, 8, 12], [2001, 10, 18]))

// step 14
const run = (text) => {

  const takeLast = (text, n) => {
    if(text.length < n) {
      return null
    }

    let str = ''

    for(let i = text.length; i > 0; i--) {
      str += text[i - 1]

      if(str.length === n) {
        break
      }
    }

    return str
  }

  return takeLast(text, 4)
}

console.log(run('kids'))
