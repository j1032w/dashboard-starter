import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DvLocWidgetComponent } from './dv-loc-widget.component';

describe('LineOfCodeWidgetComponent', () => {
  let component: DvLocWidgetComponent;
  let fixture: ComponentFixture<DvLocWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DvLocWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DvLocWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
