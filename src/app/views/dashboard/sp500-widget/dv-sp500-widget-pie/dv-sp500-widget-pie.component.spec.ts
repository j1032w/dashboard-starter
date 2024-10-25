import { ComponentFixture, TestBed } from '@angular/core/testing';
import {CommonTestConfig} from '../../../../common/test-services/common-test-config';
import {DvSP500WidgetModule} from '../dv-sp500-widget.module';

import { DvSp500WidgetPieComponent } from './dv-sp500-widget-pie.component';

describe('DvSp500WidgetPieComponent', () => {
  let component: DvSp500WidgetPieComponent;
  let fixture: ComponentFixture<DvSp500WidgetPieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DvSp500WidgetPieComponent],
      imports: [...CommonTestConfig.imports, DvSP500WidgetModule]
    }).compileComponents();

    fixture = TestBed.createComponent(DvSp500WidgetPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
