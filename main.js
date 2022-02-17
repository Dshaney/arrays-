class Pet {
  constructor(species) {
    this.species = species;
  }
}
class Dog extends Pet {
  constructor(breed, owner, age, eyes) {
    super("dog");
    this.breed = breed;
    this.owner = owner;
    this.age = age;
    this.eyes = eyes
  }
  describe() {
    console.log(
      `This dog a ${this.breed}, and he is ${this.age}, and the owner is ${this.owner} i love my dogs beautiful ${this.eyes}.`
    );
  }
}

class Cat extends Pet {
  constructor(breed, owner, age, claws) {
    super("cat");
    this.breed = breed;
    this.owner = owner;
    this.age = age;
    this.claws = claws;
  }

  describe() {
    console.log(
      `My crazy cat is ${this.breed}, she's old now she is at least ${this.age}, she like to show her ${this.claws} when she's angry.`
    );
  }
}

class App {
  static main() {
    const myCat = new Cat("Stitzu", "5 years old", "dshane", "Sharp Claws");
    const myDog = new Dog("bulldog", "3 years old", "Dshane", "Blue eyes");
    myCat.describe();
    myDog.describe();
  }
}

App.main();
