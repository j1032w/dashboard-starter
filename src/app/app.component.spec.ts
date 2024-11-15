import { TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { CommonTestConfig } from './common/test-services/common-test-config';

jest.setTimeout(30000);

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [...CommonTestConfig.imports],
      providers: [...CommonTestConfig.providers]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
