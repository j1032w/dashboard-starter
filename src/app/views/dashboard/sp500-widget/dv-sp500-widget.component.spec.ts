import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DvSp500WidgetComponent } from './dv-sp500-widget.component';

describe('DvWidgetSp500Component', () => {
  let component: DvSp500WidgetComponent;
  let fixture: ComponentFixture<DvSp500WidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DvSp500WidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DvSp500WidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
