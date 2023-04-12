import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasWidgetSettingComponentBase } from './dv-widget-setting-component-base.component';

describe('WidgetSettingComponent', () => {
  let component: DasWidgetSettingComponentBase;
  let fixture: ComponentFixture<DasWidgetSettingComponentBase>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DasWidgetSettingComponentBase ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DasWidgetSettingComponentBase);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
