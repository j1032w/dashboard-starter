import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DvLocWidgetPieComponent } from './dv-loc-widget-pie.component';

describe('LineOfCodeWidgetPieComponent', () => {
  let component: DvLocWidgetPieComponent;
  let fixture: ComponentFixture<DvLocWidgetPieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DvLocWidgetPieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DvLocWidgetPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
