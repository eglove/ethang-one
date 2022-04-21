interface IPerson {
  birthday?: Date;
  heightIn?: number;
  firstName: string;
  lastName?: string;
  weightLbs?: number;

  readonly fullName?: string;
}

export class Person implements IPerson {
  birthday?: Date;
  heightIn?: number;
  firstName: string;
  lastName?: string;
  weightLbs?: number;

  constructor(parameters: IPerson) {
    this.birthday = parameters.birthday;
    this.heightIn = parameters.heightIn;
    this.firstName = parameters.firstName;
    this.lastName = parameters.lastName;
    this.weightLbs = parameters.weightLbs;
  }

  get fullName(): string {
    if (typeof this.lastName === 'string') {
      return `${this.firstName} ${this.lastName}`;
    }

    return this.firstName;
  }
}
