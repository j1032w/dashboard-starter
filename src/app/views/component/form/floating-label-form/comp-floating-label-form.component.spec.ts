import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompFloatingLabelFormComponent } from './comp-floating-label-form.component';

describe('FloatingLabelFormComponent', () => {
  let component: CompFloatingLabelFormComponent;
  let fixture: ComponentFixture<CompFloatingLabelFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompFloatingLabelFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompFloatingLabelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
