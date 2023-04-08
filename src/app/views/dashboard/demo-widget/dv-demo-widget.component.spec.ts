import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DvDemoWidgetComponent } from './dv-demo-widget.component';

describe('DemoWidgetComponent', () => {
  let component: DvDemoWidgetComponent;
  let fixture: ComponentFixture<DvDemoWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DvDemoWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DvDemoWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
