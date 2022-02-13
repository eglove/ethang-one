/* eslint-disable unicorn/no-abusive-eslint-disable */
/* eslint-disable */
export class Dog {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const animalFunctionality = {
  sleep(): void {
    console.log('Sleeping!');
  },
  walk(): void {
    console.log('Walking!');
  },
};

const dogFunctionality = {
  __proto__: animalFunctionality,
  bark(): void {
    console.log('Woof');
  },
  play(): void {
    console.log('Playing!');
  },
  sleep(): void {
    super.sleep();
  },
  wagTail(): void {
    console.log('Wagging my tail!');
  },
  walk(): void {
    super.walk();
  },
};

Object.assign(Dog.prototype, dogFunctionality);

const pet = new Dog('Daisy');
console.log(pet.name);
// @ts-expect-error Mixin
pet.bark();
// @ts-expect-error Mixin
pet.play();
// @ts-expect-error Mixin
pet.walk();
// @ts-expect-error Mixin
pet.sleep();
