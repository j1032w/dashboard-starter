import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiResponsiveComponent } from './ui-responsive.component';

describe('ResponsiveComponent', () => {
  let component: UiResponsiveComponent;
  let fixture: ComponentFixture<UiResponsiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiResponsiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiResponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
