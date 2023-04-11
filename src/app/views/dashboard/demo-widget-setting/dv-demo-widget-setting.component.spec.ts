import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DvDemoWidgetSettingComponent } from './dv-demo-widget-setting.component';

describe('WidgetSettingComponent', () => {
  let component: DvDemoWidgetSettingComponent;
  let fixture: ComponentFixture<DvDemoWidgetSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DvDemoWidgetSettingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DvDemoWidgetSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
