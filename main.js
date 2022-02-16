class pet {
  constructor(species, name, color, eyes) {
    this.species = species;
    this.name = name;
    this.color = color
    this.eyes= eyes
  }
  describe (){
      console.log(
          `this is a ${this.species},`
          + `my ${this.name} happens to be a ${this.species},`
          +`his eyes are ${this.eyes} `
          +`and his skin color is ${this.color}!`
      );
  }
}
function main() {
  const myPet = new pet("Wolf", "Jr.", "Red", "Green");

 myPet.describe()
}

main();
