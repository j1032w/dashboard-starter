import { ComponentFixture, TestBed } from '@angular/core/testing';
import {DasGridModule} from '../../../../common/components/das-grid/das-grid.module';
import { CommonTestConfig } from '../../../../common/test-services/common-test-config';
import {DvHousingMarketWidgetModule} from '../dv-housing-market-widget.module';

import { DvHousingMarketWidgetGridComponent } from './dv-housing-market-widget-grid.component';

describe('HousingMarketTableComponent', () => {
  let component: DvHousingMarketWidgetGridComponent;
  let fixture: ComponentFixture<DvHousingMarketWidgetGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DvHousingMarketWidgetGridComponent],
      imports: [...CommonTestConfig.imports, DvHousingMarketWidgetModule, DasGridModule]
    }).compileComponents();

    fixture = TestBed.createComponent(DvHousingMarketWidgetGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
