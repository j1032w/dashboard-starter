import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiFormHorizontalComponent } from './ui-form-horizontal.component';

describe('HorizontalFormComponent', () => {
  let component: UiFormHorizontalComponent;
  let fixture: ComponentFixture<UiFormHorizontalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiFormHorizontalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiFormHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
