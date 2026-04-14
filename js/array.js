const hobbies = [
    'running',
    'biking',
    'fishing',
    'hunting',
    'coding'
];

hobbies.splice(3, 4);

console.log('arrays!', hobbies);

const hobbies2 = [
    'running',
    'biking',
    'fishing',
    'hunting',
    'coding'
];

const sliced = hobbies2.slice(2, 4);

console.log('hobbies2!', sliced, hobbies2);
