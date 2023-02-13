class AnimalShelter {
    constructor() {
      this.dogs = [];
      this.cats = [];
    }
  
    enqueue(animal) {
      if (animal.species === "dog") {
        this.dogs.push(animal);
      } else if (animal.species === "cat") {
        this.cats.push(animal);
      }
    }
  
    dequeue(pref) {
      if (pref === "dog" && this.dogs.length) {
        return this.dogs.shift();
      } else if (pref === "cat" && this.cats.length) {
        return this.cats.shift();
      } else {
        return null;
      }
    }
  }

module.exports = { AnimalShelter }