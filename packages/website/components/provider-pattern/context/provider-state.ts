const badType = (property: string, type: string): string => {
  return `Incorrect type for ${property}, must be ${type}.`;
};

export class ProviderState {
  public fullName: string;

  private _age: number;
  private _firstName: string;
  private _lastName: string;

  constructor(newState?: ProviderState) {
    Object.assign(this, newState);
  }

  private setFullName(): void {
    if (
      typeof this.firstName === 'string' &&
      typeof this.lastName === 'string'
    ) {
      this.fullName = `${this.firstName} ${this.lastName}`;
    }
  }

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    if (typeof value !== 'number') {
      throw new TypeError(badType('age', 'number'));
    }

    this._age = value;
  }

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    if (typeof value !== 'string') {
      throw new TypeError(badType('firstName', 'string'));
    }

    this._firstName = value;
    this.setFullName();
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    if (typeof value !== 'string') {
      throw new TypeError(badType('lastName', 'string'));
    }

    this._lastName = value;
    this.setFullName();
  }
}
