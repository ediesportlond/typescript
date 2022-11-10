// console.log('Hello, World!')
let firstName: string = 'Eddie'
let age: number = 29
let goog: boolean = true
let fruits: string[] = [
    'Banana',
    'Apple'
]

// console.log({firstName, age, fruits})
// console.log(`
//     First Name ${firstName}
//     Age ${age}
//     Fruits: ${fruits}
// `)

enum taxForm {
    standard = '1040',
    partnership = '1065',
    scorp = '1120s',
    ccorp = '1120',
    nonprofit = '990',
}

// console.log(`
//     You need form ${taxForm.scorp}
// `)

function getFruit(index: number): string {
    return fruits[index]
}

// console.log(`Chosen fruit is ${getFruit(0)}`)

function debug(msg: string): void {
    // console.log(msg)
}

debug('No return')

interface teacher {
    name: string,
    age: number,
    years: number,
    subject: string[]
}

let damian: teacher = {
    name: 'Damian',
    age: 49,
    years: 20,
    subject: [
        'JavaScript',
        'TypeScript'
    ]
}

console.log(damian)