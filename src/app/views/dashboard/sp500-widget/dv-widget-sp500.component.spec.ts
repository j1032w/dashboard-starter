import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DvWidgetSp500Component } from './dv-widget-sp500.component';

describe('DvWidgetSp500Component', () => {
  let component: DvWidgetSp500Component;
  let fixture: ComponentFixture<DvWidgetSp500Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DvWidgetSp500Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DvWidgetSp500Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
