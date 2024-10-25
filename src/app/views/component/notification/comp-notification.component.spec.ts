import { ComponentFixture, TestBed } from '@angular/core/testing';
import {CommonTestConfig} from '../../../common/test-services/common-test-config';
import {DasComponentViewModule} from '../das-component-view.module';

import { CompNotificationComponent } from './comp-notification.component';

describe('NotificationComponent', () => {
  let component: CompNotificationComponent;
  let fixture: ComponentFixture<CompNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompNotificationComponent],
      imports: [...CommonTestConfig.imports, DasComponentViewModule]
    }).compileComponents();

    fixture = TestBed.createComponent(CompNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
