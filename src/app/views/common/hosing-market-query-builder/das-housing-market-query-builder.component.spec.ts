import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasHousingMarketQueryBuilderComponent } from './das-housing-market-query-builder.component';

describe('QueryBuilderComponent', () => {
  let component: DasHousingMarketQueryBuilderComponent;
  let fixture: ComponentFixture<DasHousingMarketQueryBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DasHousingMarketQueryBuilderComponent ]
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
