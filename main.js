class Pet {
  constructor(species, name, color, eyes, breed, age, gender) {
    this.species = species;
    this.name = name;
    this.color = color;
    this.eyes = eyes;
    this.breed = breed;
    this.age = age;
    this.gender = gender;
  }
  describe() {
    console.log(
        `${this.name} happens to be a ${this.species}, ` +
        `her eyes are ${this.eyes} ` +
        `and her skin color is ${this.color}! `+
        `She is a ${this.gender} `+
        `her age is ${this.age} `+
        `and she is a ${this.breed}.`
    );
  }
}
function main() {
  const myPet = new Pet("Wolf", "Brit", "Red", "Crytal Blue", "Siberian Huskey", "2", "Female");

  myPet.describe();
}

main();
