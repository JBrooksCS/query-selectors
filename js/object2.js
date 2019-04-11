


const car = {
    make : "Ford",
    model : "Mustang",
    year : "2015",
    color : "red"
}

console.log(car.color, car.year, car.make, car.model);

const animalNames = ["Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts"];


// Array of objects //
/////////////////////
const names = ["Joe", "John", "Jen", "Jan"];
const relationships = ["father","brother", "sister", "mother"];
const person = {
    name: "",
    relationship: "",
}
var familyMembers = [];
const numOfFamilyMembers = 4;
for (let index = 0; index < numOfFamilyMembers; index++) {
    familyMembers[index] = person;
    familyMembers[index].name = names[index];
    familyMembers[index].relationship = relationships[index];
    console.log(familyMembers[index].name + " is my " + familyMembers[index].relationship)
}


