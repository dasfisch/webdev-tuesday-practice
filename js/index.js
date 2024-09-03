let character = 'Hello';
console.log(character);
character = "World";
let secondCharacter;
secondCharacter = character;
console.log(secondCharacter);

let profession = "teacher";
let age;
console.log(age);
console.log(profession);

let count = 8;
console.log(count + 1);
console.log(count - 1);
console.log(count * 1);
console.log(count / 1);

let rows = ["Naomi", "Quincy", "CamperChan"];
console.log(rows[0]);
rows[2] = 10;
rows[rows.length - 1];

let cities = ["London", "New York", "Mumbai"];
console.log(cities);
cities[cities.length - 1] = "Mexico City";
console.log(cities);

let rows = ["Naomi", "Quincy", "CamperChan"];
rows.push("freeCodeCamp");
let popped;
popped = rows.pop();
console.log(rows);
console.log(popped);

let character = 'Hello';
let count = 8;
let rows = ["Naomi", "Quincy", "CamperChan"];
let pushed = rows.push("freeCodeCamp");
console.log(pushed);
let popped = rows.pop();
console.log(popped);
console.log(rows);

const character = "#";
const count = 8;
const rows = [];

for (let i = 0; i < count; i = i + 1) {
  rows.push(i);
}

let result = ""

for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);

function addTwoNumbers(a, b) {
    const sum = a + b;
    return sum;
  }
  
  const sum = addTwoNumbers(5, 10);
  console.log(sum);
