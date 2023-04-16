import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DvRealtorWidgetSettingComponent } from './dv-realtor-widget-setting.component';

describe('RealtorWidgetSettingComponent', () => {
  let component: DvRealtorWidgetSettingComponent;
  let fixture: ComponentFixture<DvRealtorWidgetSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DvRealtorWidgetSettingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DvRealtorWidgetSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
