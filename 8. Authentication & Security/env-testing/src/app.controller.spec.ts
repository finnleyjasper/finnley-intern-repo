import { Test, TestingModule } from "@nestjs/testing";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

describe("AppController", () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        {
          provide: AppService,
          useValue: {
            getConfigSummary: jest.fn().mockReturnValue({
              message:
                "Environment variables loaded and validated successfully.",
              appName: "Env Testing Demo",
              port: 3000,
              apiKeyConfigured: true,
            }),
          },
        },
      ],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  it("should return a safe configuration summary", () => {
    expect(appController.getConfigSummary()).toEqual({
      message: "Environment variables loaded and validated successfully.",
      appName: "Env Testing Demo",
      port: 3000,
      apiKeyConfigured: true,
    });
  });
});
