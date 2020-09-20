// Js objects course (https://ru.hexlet.io/courses/js-objects)
// challenge 1
// console.log(getSortedNames(users)) // ['Bronn', 'Eiegon', 'Reigar', 'Sansa']

const fromPairs = (data) => {
    const obj = {}

    for(const [key, value] of data) {
        obj[key] = value
    }

    return obj
}

// console.log(fromPairs([['cat', 5], ['dog', 6], ['cat', 11]]))


// challenge 2  / way 1
const dnaToRna = (str) => {
    let result = ''

    for(const latter of str) {
        switch(latter) {
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

// way 2
const map = {
    G: 'C',
    C: 'G',
    T: 'A',
    A: 'U',
}

const dnaToRna2 = (str) => {
    const rna = []

    for(const latter of str) {
        if(!map.hasOwnProperty(latter)) {
            return null
        }

        rna.push(map[latter])
    }

    return rna.join('')
}

// console.log(dnaToRna2('') === '')

// challenge  3 (js_objects_query_string)
const bqs = (queryList) => {
    const keys = Object.keys(queryList).sort()
    const queries = []

    for(const key of keys) {
        queries.push(`${key}=${queryList[key]}`)
    }

    return queries.join('&')

    // my first decision
    //return queries.sort((a, b) => a.split(/\d{1}=/)[0] === b.split('=')[0] ? 0 : a.localeCompare(b)).join('&')
}

// console.log(bqs({ param: 'all', param1: true }))
// a.split(/\d*=/)[0] === b.split(/\d*=/)[0]

// challenge 4
const findWhere = (items, where) => {
    let entries = Object.entries(where)

    for(const item of items) {
        let find = true

        for(const [key, value] of entries) {
            if(item[key] !== value) {
                find = false
            }
        }

        if(find) {
            return item
        }
    }

    return null
}
const data11 = [
    { title: 'Book of Fooos', author: 'FooBar', year: 1111 },
    { title: 'Cymbeline', author: 'Shakespeare', year: 1611 },
    { title: 'The Tempest', author: 'Shakespeare', year: 1611 },
    { title: 'Book of Foos Barrrs', author: 'FooBar', year: 2222 },
    { title: 'Still foooing', author: 'FooBar', year: 3333 },
    { title: 'Happy Foo', author: 'FooBar', year: 4444 },
];
const where1 = { author: 'Shakespeare', year: 1611 };
// console.log(findWhere(data11, where1))

// challenge 5 (https://ru.hexlet.io/challenges/js_objects_to_roman)
const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}

const arabicNumerals = {
    '1': 'I',
    '5': 'V',
    '10': 'X',
    '50': 'L',
    '100': 'C',
    '500': 'D',
    '1000': 'M'
}

const toArabic = (roman) => {
    let num = 0

    for(let i = 0; i < roman.length; i++) {
        if(!romanNumerals.hasOwnProperty(roman[i])) {
            return false
        }

        if(romanNumerals[roman[i]] > romanNumerals[roman[i - 1]]) {
            const hasValue = Object.values(romanNumerals).includes(romanNumerals[roman[i]] - romanNumerals[roman[i - 1]])

            if(hasValue) { // check value
                return false
            }

            num += romanNumerals[roman[i]] - romanNumerals[roman[i - 1]] * 2
        } else {
            num += romanNumerals[roman[i]]
        }
    }

    return num
}

const toRoman = (arabic) => {
    const arabicStr = arabic.toString()
    let str = ''

    for(let i = 0; i < arabicStr.length; i++) {
        const dozen = arabicStr[i] + '0'.repeat(arabicStr.length - i - 1) // десятки (разбиение по разрядам!)

        if(arabicNumerals.hasOwnProperty(dozen)) {    // if we find this symbol in arabicNumbers
            str += arabicNumerals[dozen]
        }
        else {
            if(dozen.length > 1) {    // if we don't have one symbol in dozen
                const newRealArabic = '1' + dozen.slice(1, dozen.length)

                if(Number(dozen[0]) < 4 ) { // we can repeat newRealArabic (because it's normal a num)
                    str += arabicNumerals[newRealArabic].repeat(Number(dozen[0]))
                }
                else {
                    let numTopLineIndex, numMoreSymbol, numLessSymblol
                    // it's for 4, 5, 9
                    if(arabicNumerals.hasOwnProperty(numTopLineIndex)) {   // example 40:
                        numTopLineIndex = String(Number(dozen[0]) + 1) + '0'.repeat(arabicStr.length - i - 1) // it's '50'
                        numMoreSymbol = arabicNumerals[numTopLineIndex] // it's 50 symbol
                        numLessSymblol = arabicNumerals[String( +numTopLineIndex - dozen)] // it's 10 symbol
                    }
                    else { // it's for 6, 7 and 8
                        numTopLineIndex = '5' + '0'.repeat(arabicStr.length - i - 1) // it's '5XXX'
                        numLessSymblol = arabicNumerals[numTopLineIndex]

                        const newTopNumber = String(+dozen - numTopLineIndex)  // it's 50 symbol
                        const newRealArabicREal = '1' + newTopNumber.slice(1, newTopNumber.length)

                        numMoreSymbol = arabicNumerals[newRealArabicREal].repeat(Number(newTopNumber[0]))
                    }

                    str += numLessSymblol + numMoreSymbol
                }

            }
            else{
                if(Number(dozen) === 4 || Number(dozen) === 9 ) { // example 4:
                    const numTopLineIndex = String(Number(dozen) + 1) // it's '5'
                    const numMoreSymbol = arabicNumerals[numTopLineIndex] // it's 5 symbol
                    const numLessSymblol = arabicNumerals[String( +numTopLineIndex - dozen)] // it's 1 symbol
                    str += numLessSymblol + numMoreSymbol
                }
                else {  // we can repeat newRealArabic (because it's normal a num)
                    str += arabicNumerals[newRealArabic].repeat(Number(dozen[0]))
                }
            }

        }
    }

    return str
}

console.log(toArabic('IIII'))
// console.log(toRoman(3724))

// challenge 6

const scrabble = (symbols, word) => {
    word = word.toLowerCase()
    symbols = symbols.toLowerCase()

    if(symbols.length < word.length) {
        return false
    }

    let result = word

    for(const symbol of symbols) {
        if(word.includes(symbol)) {
            result.split(symbol)
        }
    }

    return result.length === word.length
}

console.log(scrabble('ivbansfdsfmfds', 'Shamil'))

