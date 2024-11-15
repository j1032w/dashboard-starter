import { APP_BASE_HREF } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import {DasCommonModule} from '../das-common.module';

// The compoonet use angular-resize-event needs the mock to pass the test
window.ResizeObserver =
  window.ResizeObserver ||
  jest.fn().mockImplementation(() => ({
    disconnect: jest.fn(),
    observe: jest.fn(),
    unobserve: jest.fn()
  }));

const providers = [{ provide: APP_BASE_HREF, useValue: '/' }];

const imports = [RouterTestingModule.withRoutes([]), DasCommonModule];

export const CommonTestConfig = {
  imports,
  providers
};
