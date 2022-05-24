import { Test, TestingModule } from "@nestjs/testing";
import { HabitResolver } from "./habit.resolver";

describe("HabitResolver", () => {
  let resolver: HabitResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HabitResolver],
    }).compile();

    resolver = module.get<HabitResolver>(HabitResolver);
  });

  it("should be defined", () => {
    expect(resolver).toBeDefined();
  });
});
