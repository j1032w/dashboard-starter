import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { CommonTestConfig } from '../../../common/test-services/common-test-config';
import { DasUserInterfaceModule } from '../das-user-interface.module';
import { UiAnimationComponent } from './ui-animation.component';

describe('UiAnimationComponent', () => {
  let component: UiAnimationComponent;
  let fixture: ComponentFixture<UiAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ...CommonTestConfig.imports,
        DasUserInterfaceModule,

        // Jest raised error with animation
        // TypeError: element.animate is not a function
        // https://github.com/angular/angular/issues/45016
        // https://github.com/angular/angular/issues/45379
        NoopAnimationsModule
      ],
      providers: [...CommonTestConfig.providers]
    }).compileComponents();

    fixture = TestBed.createComponent(UiAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
