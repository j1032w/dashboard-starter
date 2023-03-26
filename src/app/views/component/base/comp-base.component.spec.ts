import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompBaseComponent } from './comp-base.component';

describe('CompButtonComponent', () => {
  let component: CompBaseComponent;
  let fixture: ComponentFixture<CompBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompBaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
