import { Test, TestingModule } from "@nestjs/testing";
import { CalorieResolver } from "./calorie.resolver";
import { CalorieService } from "./calorie.service";

describe("CalorieResolver", () => {
  let resolver: CalorieResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CalorieResolver, CalorieService],
    }).compile();

    resolver = module.get<CalorieResolver>(CalorieResolver);
  });

  it("should be defined", () => {
    expect(resolver).toBeDefined();
  });
});
