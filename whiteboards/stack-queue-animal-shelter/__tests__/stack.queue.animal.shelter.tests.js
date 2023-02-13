const { AnimalShelter } = require('../stack.queue.animal.shelter');

describe('AnimalShelter', () => {
  let animalShelter;

  beforeEach(() => {
    animalShelter = new AnimalShelter();
  });

  describe('enqueue', () => {
    it('adds a dog to the dogs array', () => {
      const dog = { species: 'dog', name: 'Max' };
      animalShelter.enqueue(dog);
      expect(animalShelter.dogs).toEqual([dog]);
    });

    it('adds a cat to the cats array', () => {
      const cat = { species: 'cat', name: 'Whiskers' };
      animalShelter.enqueue(cat);
      expect(animalShelter.cats).toEqual([cat]);
    });
  });

  describe('dequeue', () => {
    beforeEach(() => {
      animalShelter.enqueue({ species: 'dog', name: 'Max' });
      animalShelter.enqueue({ species: 'cat', name: 'Whiskers' });
      animalShelter.enqueue({ species: 'dog', name: 'Buddy' });
    });

    it('returns the first dog if pref is dog', () => {
      const dog = animalShelter.dequeue('dog');
      expect(dog).toEqual({ species: 'dog', name: 'Max' });
      expect(animalShelter.dogs).toEqual([{ species: 'dog', name: 'Buddy' }]);
    });

    it('returns the first cat if pref is cat', () => {
      const cat = animalShelter.dequeue('cat');
      expect(cat).toEqual({ species: 'cat', name: 'Whiskers' });
      expect(animalShelter.cats).toEqual([]);
    });

    it('returns null if pref is not dog or cat', () => {
      const animal = animalShelter.dequeue('fish');
      expect(animal).toBeNull();
    });
  });
});