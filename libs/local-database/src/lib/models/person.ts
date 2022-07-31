type IPerson = {
  firstName: string;
  readonly fullName?: string;

  lastName?: string;
};

export class Person implements IPerson {
  firstName: string;
  lastName?: string;

  constructor(parameters: IPerson) {
    this.firstName = parameters.firstName;
    this.lastName = parameters.lastName;
  }

  get fullName(): string {
    if (typeof this.lastName === 'string') {
      return `${this.firstName} ${this.lastName}`;
    }

    return this.firstName;
  }
}
