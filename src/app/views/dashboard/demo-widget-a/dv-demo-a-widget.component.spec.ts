import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DvDemoAWidgetComponent } from './dv-demo-a-widget.component';

describe('DemoWidgetComponent', () => {
  let component: DvDemoAWidgetComponent;
  let fixture: ComponentFixture<DvDemoAWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DvDemoAWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DvDemoAWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
