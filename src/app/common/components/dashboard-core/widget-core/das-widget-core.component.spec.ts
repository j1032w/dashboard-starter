import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonTestConfig } from '../../../test-services/common-test-config';
import { DasWidgetCoreComponent } from './das-widget-core.component';

describe('WidgetComponent', () => {
  let component: DasWidgetCoreComponent;
  let fixture: ComponentFixture<DasWidgetCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [...CommonTestConfig.imports],
      providers: [...CommonTestConfig.providers],
    }).compileComponents();

    fixture = TestBed.createComponent(DasWidgetCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
