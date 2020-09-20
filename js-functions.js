// Js functions course (https://ru.hexlet.io/courses/js-functions)

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

// console.log(run('kids'))

// step 17
const takeOldest = (users, count = 1) => {
  users.sort((a, b) =>  {
    if(Date.parse(a.birthday) === Date.parse(b.birthday)) {
      return 0
    }

    return Date.parse(a.birthday) > Date.parse(b.birthday) ? 1 : -1
  })

  return users.slice(0, count)
}
const users = [
  { name: 'Tirion', birthday: 'Nov 19, 1988' },
  { name: 'Sam', birthday: 'Nov 22, 1999' },
  { name: 'Rob', birthday: 'Jan 11, 1975' },
  { name: 'Sansa', birthday: 'Mar 20, 2001' },
  { name: 'Tisha', birthday: 'Feb 27, 1992' },
  { name: 'Chris', birthday: 'Dec 25, 1995' },
]

// console.log(takeOldest(users))

// step 20
const getChildren = users => users.map(({children}) => children).flat()
const users1 = [
  {
    name: 'Tirion',
    children: [
      { name: 'Mira', birthday: '1983-03-23' },
    ],
  },
  { name: 'Bronn', children: [] },
  {
    name: 'Sam',
    children: [
      { name: 'Aria', birthday: '2012-11-03' },
      { name: 'Keit', birthday: '1933-05-14' },
    ],
  },
  {
    name: 'Rob',
    children: [
      { name: 'Tisha', birthday: '2012-11-03' },
    ],
  },
]

// console.log(getChildren(users1))

// step 23
const getGirlFriends = users => users.map(({friends}) => friends).flat().filter(({gender}) => gender === 'female')

const users2 = [
  {
    name: 'Tirion',
    friends: [
      { name: 'Mira', gender: 'female' },
      { name: 'Ramsey', gender: 'male' },
    ],
  },
  { name: 'Bronn', friends: [] },
  {
    name: 'Sam',
    friends: [
      { name: 'Aria', gender: 'female' },
      { name: 'Keit', gender: 'female' },
    ],
  },
  {
    name: 'Rob',
    friends: [
      { name: 'Taywin', gender: 'male' },
    ],
  },
];

// console.log(getGirlFriends(users2))

// step 26 https://ru.hexlet.io/courses/js-functions/lessons/reduce/exercise_unit
const getMenCountByYear = (users) => {
  const birthdays = users.filter(({gender}) => gender === 'male').map(({birthday}) => +birthday.slice(0, 4))
  const menCount = {}

  birthdays.reduce((acc, birthday) => menCount.hasOwnProperty(birthday) ? menCount[birthday] += 1 : menCount[birthday] = 1, birthdays)

  return menCount
}
// way 2
const getMenCountByYear2 = (users) => {
  const years = users.filter(({ gender }) => gender === 'male').map(({birthday}) => birthday.slice(0, 4))

  return years.reduce((acc, year) => {
    const count = acc.hasOwnProperty(year) ? acc[year] += 1 : acc[year] = 1

    return { ...acc, [year]: count }
  }, {})
}

const users3 = [
  { name: 'Bronn', gender: 'male', birthday: '1973-03-23' },
  { name: 'Reigar', gender: 'male', birthday: '1973-11-03' },
  { name: 'Eiegon', gender: 'male', birthday: '1963-11-03' },
  { name: 'Sansa', gender: 'female', birthday: '2012-11-03' },
  { name: 'Jon', gender: 'male', birthday: '1980-11-03' },
  { name: 'Robb', gender: 'male', birthday: '1980-05-14' },
  { name: 'Tisha', gender: 'female', birthday: '2012-11-03' },
  { name: 'Rick', gender: 'male', birthday: '2012-11-03' },
  { name: 'Joffrey', gender: 'male', birthday: '1999-11-03' },
  { name: 'Edd', gender: 'male', birthday: '1973-11-03' },
];

// console.log(getMenCountByYear2(users3))

// step 29
const freeEmailDomains = [
  'gmail.com',
  'yandex.ru',
  'hotmail.com',
]
const getFreeDomainsCount = (emails) => {

  return emails
      .map(email => email.split('@')[1])  // получаем домены
      .filter(email => freeEmailDomains.includes(email)) // e-mail -ы на бесплатных доменах
      .reduce((acc, email) => {               // группирум по доменам
        const count = acc.hasOwnProperty(email) ? acc[email] += 1 : acc[email] = 1

        return { ...acc, [email]: count }
      }, {})
}
const emails = [
  'info@gmail.com',
  'info@yandex.ru',
  'info@hotmail.com',
  'mk@host.com',
  'support@hexlet.io',
  'key@yandex.ru',
  'sergey@gmail.com',
  'vovan@gmail.com',
  'vovan@hotmail.com',
]

// console.log(getFreeDomainsCount(emails, freeEmailDomains))

// step 32
const enlargeArrayImage = (arr) => {
  const newArr = []

  arr.forEach(item => newArr.push(item, item) )

  return newArr.map( items =>
      items.reduce((acc, item) => [...acc, item, item], [])
  )
}

const arr1 = [
  ['*', '*', '*', '*'],
  ['*', ' ', ' ', '*'],
  ['*', ' ', ' ', '*'],
  ['*', '*', '*', '*'],
];

const arr1Enlarged = [
  ['*', '*', '*', '*', '*', '*', '*', '*'],
  ['*', '*', '*', '*', '*', '*', '*', '*'],
  ['*', '*', ' ', ' ', ' ', ' ', '*', '*'],
  ['*', '*', ' ', ' ', ' ', ' ', '*', '*'],
  ['*', '*', ' ', ' ', ' ', ' ', '*', '*'],
  ['*', '*', ' ', ' ', ' ', ' ', '*', '*'],
  ['*', '*', '*', '*', '*', '*', '*', '*'],
  ['*', '*', '*', '*', '*', '*', '*', '*'],
];

console.log(enlargeArrayImage(arr1)[2])
console.log(arr1Enlarged[2])

// Finish!!!
