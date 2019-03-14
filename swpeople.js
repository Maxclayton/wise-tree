import {people} from './people.js';


const fatPpl = people.filter(person => Number(person.mass.replace(/,/g, '')) > 100);
console.log(fatPpl);
const skinnyPpl = people.filter(person => Number(person.mass.replace(/,/g, '')) < 50);
console.log(skinnyPpl);
//console.log(men, women, other)



const fatPplContainer = document.querySelector('.fatPplContainer');

fatPpl.forEach((fatPerson) => {
    let fatPersonElement = document.createElement('div');
    fatPersonElement.className = 'box';
    fatPersonElement.textContent = fatPerson.name;
    let mass = document.createElement('p');
    mass.textContent = fatPerson.mass;
    fatPersonElement.appendChild(mass);
    fatPplContainer.appendChild(fatPersonElement);
})

const skinnyPplContainer = document.querySelector('.skinnyPplContainer');

skinnyPpl.forEach((skinnyPerson) => {
    let skinnyPersonElement = document.createElement('div');
    skinnyPersonElement.className = 'box';
    skinnyPersonElement.textContent = skinnyPerson.name;
    let mass = document.createElement('p') ;
    mass.textContent = skinnyPerson.mass;
    skinnyPersonElement.appendChild(mass);
    skinnyPplContainer.appendChild(skinnyPersonElement);
})