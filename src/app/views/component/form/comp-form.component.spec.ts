import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasFormComponent } from './ui-form.component';

describe('FormComponent', () => {
  let component: DasFormComponent;
  let fixture: ComponentFixture<DasFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DasFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
