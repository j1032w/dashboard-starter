import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiFloatingLabelFormComponent } from './ui-floating-label-form.component';

describe('FloatingLabelFormComponent', () => {
  let component: UiFloatingLabelFormComponent;
  let fixture: ComponentFixture<UiFloatingLabelFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiFloatingLabelFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiFloatingLabelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
