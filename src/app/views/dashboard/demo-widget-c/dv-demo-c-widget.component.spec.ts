import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DvDemoCWidgetComponent } from './dv-demo-c-widget.component';

describe('DemoWidgetComponent', () => {
  let component: DvDemoCWidgetComponent;
  let fixture: ComponentFixture<DvDemoCWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DvDemoCWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DvDemoCWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
