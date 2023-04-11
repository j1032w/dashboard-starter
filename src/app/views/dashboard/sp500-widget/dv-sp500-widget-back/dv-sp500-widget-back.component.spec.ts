import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DvSp500WidgetBackComponent } from './dv-sp500-widget-back.component';

describe('DvSp500WidgetBackComponent', () => {
  let component: DvSp500WidgetBackComponent;
  let fixture: ComponentFixture<DvSp500WidgetBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DvSp500WidgetBackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DvSp500WidgetBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
