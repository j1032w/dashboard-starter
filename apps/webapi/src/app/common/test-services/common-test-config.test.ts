import {Logger} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';


const providers = [
  Logger,
  {
    provide: ConfigService,
    useValue: {
      get: jest.fn((key) => {
        if (key === 'appConfig') {
          return { name: 'TestApp' }; // Mocked configuration value
        }
        return null;
      }),
    },
  },
];




export const commonTestConfig = {
  providers,

};
