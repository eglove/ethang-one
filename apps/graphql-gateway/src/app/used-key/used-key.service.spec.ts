import { Test, TestingModule } from "@nestjs/testing";
import { UsedKeyService } from "./used-key.service";

describe("UsedKeyService", () => {
  let service: UsedKeyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsedKeyService],
    }).compile();

    service = module.get<UsedKeyService>(UsedKeyService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
