import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompFormHorizontalComponent } from './comp-form-horizontal.component';

describe('HorizontalFormComponent', () => {
  let component: CompFormHorizontalComponent;
  let fixture: ComponentFixture<CompFormHorizontalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompFormHorizontalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompFormHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
