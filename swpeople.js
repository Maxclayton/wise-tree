import {people} from './people.js';

//const men = people.filter(person => person.gender === 'male');
//const women = people.filter(person => person.gender === 'female');
//const other = people.filter(person => (person.gender === 'n/a') || (person.gender === 'hermaphrodite') || (person.gender === 'none'));
//const shortPpl = people.filter(person => Number(person.height) < 100);
const fatPpl = people.filter(person => Number(person.mass.replace(/,/g, '')) > 1000);
console.log(fatPpl);
console.log(men, women, other)

const mainContainer = document.querySelector('.man-holder');
men.forEach((man) => {
    let manElement = document.createElement('div');
    manElement.className = 'box';
    manElement.textContent = man.name;
    let eyeColor = document.createElement('p');
    eyeColor.textContent = man.eye_color;
    manElement.appendChild(eyeColor);
    mainContainer.appendChild(manElement);
});


const womanContainer = document.querySelector('.woman-holder');


women.forEach((man) => {
    let manElement = document.createElement('div');
    manElement.className = 'box';
    manElement.textContent = man.name;
    let eyeColor = document.createElement('p');
    eyeColor.textContent = man.eye_color;
    manElement.appendChild(eyeColor);
    womanContainer.appendChild(manElement);
})

const fatPplContainer = document.querySelector('.fatPplContainer');


man.forEach((man) => {
    let manElement = document.createElement('div');
    manElement.className = 'box';
    manElement.textContent = man.name;
    let mass = document.createElement('p');
    mass.textContent = man.mass;
    manElement.appendChild(mass);
    womanContainer.appendChild(manElement);
})
