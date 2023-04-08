import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasWidgetCoreSettingComponent } from './das-widget-core-setting.component';

describe('WidgetSettingComponent', () => {
  let component: DasWidgetCoreSettingComponent;
  let fixture: ComponentFixture<DasWidgetCoreSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DasWidgetCoreSettingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DasWidgetCoreSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
