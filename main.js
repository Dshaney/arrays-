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
    if (this.gender == "female") {
      console.log(`${this.name} happens to be a ${this.species} and he is a ${this.breed}`);
    } else {
      console.log(`${this.name} happens to be a ${this.species} and she is a ${this.breed}`);
    }
  }
}

function main() {
  const myPet = new Pet(
    "Wolf",
    "Brit",
    "Red",
    "Crytal Blue",
    "Siberian Huskey",
    2,
    "female"
  );

  myPet.describe();
}

main();
