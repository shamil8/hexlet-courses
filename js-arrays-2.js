/**
-- Course js arrays part 2
*/

// step 33
const countUniqCharts = (text) => {
  const localLatters = []

  for(const latter of text) {
    !localLatters.includes(latter) && localLatters.push(latter)
  }

  return localLatters.length
}

// console.log(countUniqCharts('You know nothing Jon Snow'))

// step 35 https://ru.hexlet.io/courses/js-arrays/lessons/nested-arrays/exercise_unit

const getSuperSeriesWinner = (scores) => {
  let ussr = 0
  let canada = 0

  for(const game of scores) {
    if(game[1] > game[0]) ussr++
    
    if(game[1] < game[0]) canada++
  }

  if(ussr === canada) return null

  return ussr > canada ? 'ussr' : 'canada'
}
  const scores = [
    [3, 2],
    [4, 1],
    [5, 8],
    [5, 5],
    [2, 2],
    [2, 4],
    [4, 2],
    [2, 3],
  ];

// console.log(getSuperSeriesWinner(scores)) // 'canada'

// step 37
const bubbleSort = (arr) => {
  arr.forEach(() => {
    for(let i = 0; i < arr.length - 1; i++) {
      if(arr[i] > arr[i + 1]) {
        const temp = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = temp
      }
    }
  })

  return arr
}

// console.log(bubbleSort([3, 10, 4, 3])) // [ 3, 3, 4, 10 ]

// step 42 https://ru.hexlet.io/courses/js-arrays/lessons/big-o/exercise_unit
const getIntersectionOfSortedArrays = (arr1, arr2) => arr2.filter(item => arr1.includes(item))

// console.log(getIntersectionOfSortedArrays([10, 11, 24], [10, 13, 14, 18, 24, 30])); // [10, 24]

// step 47    https://ru.hexlet.io/courses/js-arrays/lessons/rest-operator/exercise_unit
const getMax = arr => {
  if(!arr.length) return null
  let [first, ...rest] = arr
  
  rest.forEach(item => {
    if(item > first) first = item
  })

  return first
}

// console.log(getMax([1, 10, 8])) // 10

// step 49    https://ru.hexlet.io/courses/js-arrays/lessons/spread-operator/exercise_unit
const flatten = arr => {
  const newArr = []

  arr.forEach(item => Array.isArray(item) ? newArr.push(...item) : newArr.push(item))

  return newArr
}

// console.log(flatten([1, [2], [3], 9])) // [1, [2], [3], 9]

// step 50  https://ru.hexlet.io/courses/js-arrays/lessons/destructuring/exercise_unit

const getTheNearestLocation = (locations, currentPoint) => {
  if(!locations.length) return null

  const [[name, point]] = locations
  
  let min = getDistance(point, currentPoint)
  let currentLoc = [name, point]

  locations.forEach(location => {
    const [name, point] = location
    const distance = getDistance(point, currentPoint)

    if(distance < min) {
      min = distance
      currentLoc = [name, point]
    }
  })

  return currentLoc
}

const getDistance = ([x1, y1], [x2, y2]) => {
  const xs = x2 - x1;
  const ys = y2 - y1;

  return Math.sqrt(xs ** 2 + ys ** 2);
};

const locations = [
  ['Park', [10, 5]],
  ['Sea', [1, 3]],
  ['Museum', [8, 4]],
];

const currentPoint = [5, 5];

// Если точек нет, то возвращается null
// getTheNearestLocation([], currentPoint); // null

//  console.log(getTheNearestLocation(locations, currentPoint)) // ['Museum', [8, 4]]

// step 51
const openingSymbols = ['(', '[', '{', '<'];
const closingSymbols = [')', ']', '}', '>'];

const isBracketStructureBalanced = (expression) => {
  if(expression.length % 2 !== 0) return false

  const stack = []

  for(const symbol of expression) {
    if(openingSymbols.indexOf(symbol) > -1) {
      stack.push(symbol)
    }
    else {
      const symbolOpenBreacket = openingSymbols[closingSymbols.indexOf(symbol)]
      const lastSymbol = stack[stack.length - 1]

        if(stack.indexOf(symbolOpenBreacket) > -1 && lastSymbol === symbolOpenBreacket) {
          stack.splice(-1,1)
        }
    }
  }

  return stack.length === 0
}

console.log(isBracketStructureBalanced('())[]'))
