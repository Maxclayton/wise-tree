import { people } from "./people.js";

const fatPpl = people.filter(
  person => Number(person.mass.replace(/,/g, "")) > 100
);
fatPpl.sort((a, b) => {
  return Number(b.mass.replace(/,/g, "")) - Number(a.mass.replace(/,/g, ""));
});
console.log(fatPpl);
const skinnyPpl = people.filter(
  person => Number(person.mass.replace(/,/g, "")) < 50
);
skinnyPpl.sort((a, b) => {
  return Number(b.mass.replace(/,/g, "")) - Number(a.mass.replace(/,/g, ""));
});
console.log(skinnyPpl);
//console.log(men, women, other)

const fatPplContainer = document.querySelector(".fatPplContainer");

fatPpl.forEach(fatPerson => {
  let fatPersonElement = document.createElement("div");
  fatPersonElement.className = "box";
  fatPersonElement.textContent = fatPerson.name;
  let mass = document.createElement("p");
  mass.textContent = fatPerson.mass;
  fatPersonElement.appendChild(mass);
  fatPplContainer.appendChild(fatPersonElement);
  {
    console.log(fatPpl);
  }
});

const skinnyPplContainer = document.querySelector(".skinnyPplContainer");

skinnyPpl.forEach(skinnyPerson => {
  let skinnyPersonElement = document.createElement("div");
  skinnyPersonElement.className = "box";
  skinnyPersonElement.textContent = skinnyPerson.name;
  let mass = document.createElement("p");
  mass.textContent = skinnyPerson.mass;
  skinnyPersonElement.appendChild(mass);
  skinnyPplContainer.appendChild(skinnyPersonElement);
  {
    console.log(skinnyPpl);
  }
});
