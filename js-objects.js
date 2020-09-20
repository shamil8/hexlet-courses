// Js objects course (https://ru.hexlet.io/courses/js-objects)

const user = { name: 'Vasya', married: true, age: 25, cars: ['BMW', 'Ford', 'Mazda'] };

delete user.age

// console.log(user)

const name    = 'Vasya';
const married = true;
const age     = 25;

const user2 = { name, married, age };

// console.log(user2);

const fruitsCounter = (fruits) => {
  const statistics = {};

  for (const fruit of fruits) {
    if (statistics.hasOwnProperty(fruit)) {
      statistics[fruit] += 1;
    } else {
      statistics[fruit] = 1;
    }
  }

  return statistics;
};

const bag = [
  'apple', 'banana', 'pear',
  'apricot', 'apple', 'banana',
  'apple', 'orange', 'pear',
];

// console.log(fruitsCounter(bag))
// I want to do it without any standart function (Yeeh, It's my hobbies)
const mySplit = (symbol) => {

  return symbol
}

const getWordsCount = expression => {
  const words = {}
  let currentStartIndex = 0

  for(let i = 0; i < expression.length; i++) {
    if(expression[i] === ' ' || expression.length - 1 === i) {
      let newWord = ''

      while(currentStartIndex < i) {        // we could do it with split()
        newWord += expression[currentStartIndex]
        currentStartIndex++

        newWord += currentStartIndex === expression.length - 1 ? expression[i] : ''  // if it's the end latter we also add it
      }
      currentStartIndex++

      if(words.hasOwnProperty(newWord)) {
        words[newWord]++
      } else {
        words[newWord] = 1  // we could do it with push()
      }

    }
  }

  return words
}

const content = 'cat dog cat eye see cat dog ivan'

const result = getWordsCount(content)
// console.log(result)
// {
//     cat: 3,
//     dog: 2,
//     eye: 1,
//     see: 1,
// };

const getIn = (data, values) => {
  values.forEach(val => data = data && data.hasOwnProperty(val) ? data[val] : null)

  return data
}
/*
const data = {
  user: 'ubuntu',
  hosts: {
    0: {
      name: 'web1',
    },
    1: {
      name: 'web2',
      null: 3,
      active: false,
    },
  },
}
console.log(getIn(data, ['undefined']))
console.log(getIn(data, ['user']))
console.log(getIn(data, ['user', 'ubuntu']))
console.log(getIn(data, ['hosts', '1', 'name']))
console.log(getIn(data, ['hosts', 0]))
console.log(getIn(data, ['hosts', 1, null]))
console.log(getIn(data, ['hosts', 1, 'active']))
console.log(getIn(null, ['hosts', 1, 'active']))
*/

const pick = (data, keys) => {
  const newObj = {}
  if(!data) return {}
  /*
    for([key, value] of Object.entries(data)) {
      for(k of keys) {
        if(k === key) {
          newObj[key] = value
        }
      }
  */
  for(const [key, value] of Object.entries(data)) {
    keys.forEach(k => k === key ? newObj[key] = value : '')
  }

  return newObj
}
const data = null;
/*
console.log(pick(data, ['user']))       // { user: 'ubuntu' }
console.log(pick(data, ['user', 'os'])) // { user: 'ubuntu', os: 'linux' }
console.log(pick(data, []))             // {}
*/
// console.log(pick(data, []))       // {}

const getSortedNames = (users) => {
  const names = []

  // way 1
  // users.forEach(user => userNames.push(user.name))

  // way 2 (it's more readable and pretty)
  for(const { name } of users) {
    names.push(name)
  }

  return names.sort()
}

const users = [
  { name: 'Bronn', gender: 'male', birthday: '1973-03-23' },
  { name: 'Reigar', gender: 'male', birthday: '1973-11-03' },
  { name: 'Eiegon', gender: 'male', birthday: '1963-11-03' },
  { name: 'Sansa', gender: 'female', birthday: '2012-11-03' },
];


