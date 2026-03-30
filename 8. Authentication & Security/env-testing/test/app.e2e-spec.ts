import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../src/app.module';
import { AppService } from '../src/app.service';

describe('AppModule config validation', () => {
  it('loads validated environment variables successfully', async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    const appService = moduleFixture.get(AppService);

    expect(appService.getConfigSummary()).toEqual({
      message: 'Environment variables loaded and validated successfully.',
      appName: 'Env Testing Demo',
      port: 3000,
      apiKeyConfigured: true,
    });
  });
});
