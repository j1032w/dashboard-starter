import { Test, TestingModule } from '@nestjs/testing';
import { commonTestConfig } from '../../common/test-services/common-test-config.test';

import { HomeController } from './home.controller';
import { HomeService } from './home.service';

describe('HomeController', () => {
  let app: TestingModule;
  let homeService: HomeService;

  beforeAll(async () => {
    app = await Test.createTestingModule({

      controllers: [HomeController],
      providers: [HomeService, ...commonTestConfig.providers],
    }).compile();

    homeService = app.get<HomeService>(HomeService);
    homeService.appInfo = jest.fn().mockReturnValue({ message: 'TestApp' });
  });

  describe('getData', () => {
    it('should return "TestApp"', () => {
      const homeController = app.get<HomeController>(HomeController);
      expect(homeController.getAppInfo()).toEqual({ message: 'TestApp' });
    });
  });
});
