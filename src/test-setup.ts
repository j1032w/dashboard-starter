/* eslint-disable */

global.ResizeObserver = jest.fn().mockImplementation(() => {
  return {
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn()
  };
});


global.MutationObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  disconnect: jest.fn(),
}));


// @ts-expect-error https://thymikee.github.io/jest-preset-angular/docs/getting-started/test-environment
globalThis.ngJest = {
  testEnvironmentOptions: {
    errorOnUnknownElements: true,
    errorOnUnknownProperties: true
  }
};
import 'jest-preset-angular/setup-jest';
import 'jest-canvas-mock';
import { Chart, registerables } from 'chart.js';

// Register the required components
Chart.register(...registerables);

Object.defineProperty(window, 'CSS', { value: null });

Object.defineProperty(window, 'getComputedStyle', {
  value: () => {
    return {
      display: 'none',
      appearance: ['-webkit-appearance'],
      getPropertyValue: () => {
        return '';
      }
    };
  }
});

Object.defineProperty(document, 'doctype', {
  value: '<!DOCTYPE html>'
});
Object.defineProperty(document.body.style, 'transform', {
  value: () => {
    return {
      enumerable: true,
      configurable: true
    };
  }
});

// import 'web-animations-js';
// If run jest test individually, the test passed. But when run all tests together, the test failed. :
// ChatGPT: The `web-animations-js` polyfill can cause conflicts with `zone.js` when running tests in Jest, especially when multiple tests are run together. This is because `web-animations-js` modifies global prototypes in a way that interferes with `zone.js`'s patching mechanism.

// Mock for `element.animate`
if (typeof HTMLElement.prototype.animate !== 'function') {
  Object.defineProperty(HTMLElement.prototype, 'animate', {
    value: function () {
      return {
        currentTime: 0,
        // Simulate the Promise that resolves when the animation finishes
        finished: Promise.resolve(),
        // Methods that might be called
        cancel: () => {},
        play: () => {},
        pause: () => {},
        reverse: () => {},
        // Event handling methods
        addEventListener: (event: string, handler: () => void) => {},
        removeEventListener: (event: string, handler: () => void) => {},
        // Optional: If your animations use these properties
        onfinish: null,
        oncancel: null,
      };
    },
    writable: true,
    configurable: true,
  });
}
