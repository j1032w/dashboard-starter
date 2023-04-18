import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DasWidgetSettingComponent } from './das-widget-setting.component';


describe('WidgetSettingComponent', () => {
  let component: DasWidgetSettingComponent;
  let fixture: ComponentFixture<DasWidgetSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DasWidgetSettingComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DasWidgetSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
