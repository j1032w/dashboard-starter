import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DasDashboardCoreModule } from '../../../common/components/dashbarod-core/das-dashboard-core.module';
import { CommonTestConfig } from '../../../common/test-services/common-test-config';

import { DasHousingMarketQueryBuilderComponent } from './das-housing-market-query-builder.component';

describe('QueryBuilderComponent', () => {
  let component: DasHousingMarketQueryBuilderComponent;
  let fixture: ComponentFixture<DasHousingMarketQueryBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [...CommonTestConfig.imports, DasDashboardCoreModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(DasHousingMarketQueryBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
