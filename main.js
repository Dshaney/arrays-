class pet {
  constructor(species, name) {
    this.species = species;
    this.name = name;
  }
}
function main() {
  const myPet = new pet("Wolf", "Jr.");
  console.log(myPet.name);
  console.log(myPet.species);
}

main();
