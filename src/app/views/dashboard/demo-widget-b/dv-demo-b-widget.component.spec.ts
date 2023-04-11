import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DvDemoBWidgetComponent } from './dv-demo-b-widget.component';

describe('DemoWidgetComponent', () => {
  let component: DvDemoBWidgetComponent;
  let fixture: ComponentFixture<DvDemoBWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DvDemoBWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DvDemoBWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
