import { Prisma } from '@prisma/client';

export class TypeDefinition {
  public pluralFieldNames: Record<string, string>;
  public queries: string;
  public singularFieldNames: Record<string, string>;

  constructor() {
    this.singularFieldNames = {};
    this.pluralFieldNames = {};

    for (const modelName of Object.getOwnPropertyNames(Prisma.ModelName)) {
      const singular = `${modelName[0]
        .charAt(0)
        .toLowerCase()}${modelName.slice(1)}`;
      const plural = `${singular}s`;

      this.singularFieldNames[singular] = modelName;
      this.pluralFieldNames[plural] = modelName;
    }

    this.queries = ``;
    this.createQueries();
  }

  private readonly createQueries = (): void => {
    this.queries += `type Query {`;

    for (const key in this.singularFieldNames) {
      if (Object.prototype.hasOwnProperty.call(this.singularFieldNames, key)) {
        this.queries += `\n${key}(where: ${this.singularFieldNames[key]}WhereUniqueInput): ${this.singularFieldNames[key]}!`;
      }
    }

    for (const key in this.pluralFieldNames) {
      if (Object.prototype.hasOwnProperty.call(this.pluralFieldNames, key)) {
        this.queries += `\n${key}: [${this.pluralFieldNames[key]}]`;
      }
    }

    this.queries += `\n}`;
  };
}
