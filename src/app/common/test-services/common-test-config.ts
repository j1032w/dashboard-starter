import { APP_BASE_HREF } from '@angular/common';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import {provideToastr} from 'ngx-toastr';
import { DasCommonComponentModule } from '../das-common-component.module';

// The component use angular-resize-event needs the mock to pass the test
window.ResizeObserver =
  window.ResizeObserver ||
  jest.fn().mockImplementation(() => ({
    disconnect: jest.fn(),
    observe: jest.fn(),
    unobserve: jest.fn()
  }));

const providers = [
  {
    provide: APP_BASE_HREF,
    useValue: '/'
  },
  provideRouter([]),
  provideAnimations(),
  provideToastr({
    closeButton: true,
    newestOnTop: false,
    positionClass: 'toast-bottom-center',
    progressBar: true,
    tapToDismiss: false,
    timeOut: 4000,
  }),
];

const imports = [DasCommonComponentModule];

export const CommonTestConfig = {
  imports,
  providers
};
