import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompNotificationComponent } from './comp-notification.component';

describe('NotificationComponent', () => {
  let component: CompNotificationComponent;
  let fixture: ComponentFixture<CompNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompNotificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
