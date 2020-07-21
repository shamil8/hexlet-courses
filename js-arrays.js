/**

*/

// step 3
const getWeekends = (str) => {
  return str === 'short' 
    ? ['sat', 'sun']
    : ['saturday', 'sunday']
}
// console.log(getWeekends(''))

// step 6
const swap = (arr) => {
  if(arr.length < 2) {
    return arr
  }

  const temp = arr[arr.length - 1]
  arr[arr.length - 1] = arr[0]
  arr[0] = temp

  return arr
}
// console.log(swap(['Shamil', 'Ivan', 'Man'])) // ["Man", "Ivan", "Shamil"]

// step 8
const get = (arr, index, def = null) => typeof arr[index] === 'undefined' ? def : arr[index]


// console.log(get(['Bla'], 0, 'paris'))    // Bla

const addPrefix = ([...arr], prefix) => {
  for(let i = 0; i < arr.length; i++) {
    arr[i] = prefix + ' ' + arr[i]
  }

  return arr
}
 const names = ['john', 'smith', 'karl']
const newNames = addPrefix(names, 'Mr')
const newNamesWomen = addPrefix(names, 'Mrs')
// console.log(newNames)
// console.log(newNamesWomen) // ["Mrs john","Mrs smith","Mrs karl"]

// step 13
const reverse = (arr) => {
  const len = arr.length
  for(let i = arr.length-1; i >= 0; i--) {
    arr.push(arr[i])
  }
  return arr.splice(0, len);
}

const names1 = ['john', 'smith', 'karl']

// console.log(reverse(['john', 'smith', 'karl', 'alan', 'joe']))

// step 16
const calculateSum = (arr) => {
  let sum = 0

  if(arr.length === 0) {
    return null
  }

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 3 === 0)   {
      sum += arr[i]
    }
  }

  return sum
}

const coll2 = [2, 0, 17, 3, 9, 15, 4]

// console.log(calculateSum(coll2))

// step 17

const calculateAverage = (arr) => {
  if(arr.length === 0) {
    return null
  }

  let sum = 0
  for(let item of arr) {
    sum += item
  }

  return sum / arr.length
}

const temperatures = [37.5, 34, 39.3, 40, 38.7, 41.5];
// console.log(calculateAverage(temperatures))

// step 21 (delete array)

const getSameParity = (arr) => {
  const isEven = arr[0] % 2 === 0

  let result = []

  for(item of arr) {
    if(isEven || item % 2 !== 0){
      result.push(item)
    }
  }

  return result
}

// console.log(getSameParity([2, 2, 8]))

// step 24

const getTotalAmount = (money, currency) => {
  let result = 0

  for(let bill of money) {
    let billMoney = bill.split(' ')
    
    if(billMoney[0] === currency) {
      result += + billMoney[1]
    }
  }

  return result
}

const money1 = [
  'eur 10', 'usd 1', 'usd 10', 'rub 50', 'usd 5',
];
console.log(getTotalAmount(money1, 'usd')) // 16
