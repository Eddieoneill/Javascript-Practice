// This is my first JS code!
let name = 'Eddie';
console.log(name);

// Cannot be a reserved keyword
// Should be meaningful

let firstName = 'Eddie', lastName = 'O\'Neill'
console.log(lastName) 

let person = {
    name: 'Eddie',
    age: 23
};

person['name'] = 'James'
console.log(person);

let colors = []

colors.push('blue')
colors.push('red')
colors[3] = 'green'
console.log(colors)

function greet(age) {
    if (age >= 10) {
        console.log(age)
    };
};

greet(person.age)

