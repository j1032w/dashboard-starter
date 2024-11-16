import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonTestConfig } from '../../../../common/test-services/common-test-config';

import { DvSp500WidgetGridComponent } from './dv-sp500-widget-grid.component';

describe('DvSp500WidgetBackComponent', () => {
  let component: DvSp500WidgetGridComponent;
  let fixture: ComponentFixture<DvSp500WidgetGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [...CommonTestConfig.imports]
    }).compileComponents();

    fixture = TestBed.createComponent(DvSp500WidgetGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
