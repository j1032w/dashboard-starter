import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonTestConfig } from '../../../common/test-services/common-test-config';

import { UiResponsiveComponent } from './ui-responsive.component';

describe('ResponsiveComponent', () => {
  let component: UiResponsiveComponent;
  let fixture: ComponentFixture<UiResponsiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [...CommonTestConfig.imports],
      providers: [...CommonTestConfig.providers],
    }).compileComponents();

    fixture = TestBed.createComponent(UiResponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
