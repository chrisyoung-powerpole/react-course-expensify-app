//Object Destructuring

/* const person = {
    name: 'Chris',
    age: 29,
    location: {
        city: 'Tampa',
        temp: 85
    }
};

const { name: firstName = 'Anonymous', age } = person;

console.log(`${firstName} is ${age}.`);

const { temp: temperature, city } = person.location;

if (city && temperature) {
    console.log(`It's ${temperature} in ${city}.`);
} */

/* const book = {
    title: 'Ego Is The Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const { name: publisherName = 'Self-Published' } = book.publisher;

console.log(`${publisherName} published the book.`); */


//Array Destructuring

/* const address = ['9010 Palm River Rd', 'Tampa', 'Florida', '33647'];

const [street, city, state = 'New York', zip] = address;

console.log(`You are in ${city}, ${state}, ${zip}.`); */


const item = ['Coffee', '$2', '$5', '$7'];

const [menuItem, small, medium, large] = item;

console.log(`${menuItem} cost ${small} for a small and ${medium} for a medium.`);

