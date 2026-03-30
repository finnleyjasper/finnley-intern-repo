import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService) {}

  getConfigSummary() {
    return {
      message: "Environment variables loaded and validated successfully.",
      appName: this.configService.getOrThrow<string>("APP_NAME"),
      port: this.configService.getOrThrow<number>("PORT"),
      apiKeyConfigured: Boolean(
        this.configService.getOrThrow<string>("API_KEY"),
      ),
    };
  }
}
