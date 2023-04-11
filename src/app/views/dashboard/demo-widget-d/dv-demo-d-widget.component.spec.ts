import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DvDemoDWidgetComponent } from './dv-demo-d-widget.component';

describe('DemoWidgetComponent', () => {
  let component: DvDemoDWidgetComponent;
  let fixture: ComponentFixture<DvDemoDWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DvDemoDWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DvDemoDWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
