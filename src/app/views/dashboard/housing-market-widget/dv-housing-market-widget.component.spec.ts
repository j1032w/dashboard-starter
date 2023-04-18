import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DvHousingMarketWidgetComponent } from './dv-housing-market-widget.component';

describe('DvHousingMarketWidgetComponent', () => {
  let component: DvHousingMarketWidgetComponent;
  let fixture: ComponentFixture<DvHousingMarketWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DvHousingMarketWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DvHousingMarketWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
