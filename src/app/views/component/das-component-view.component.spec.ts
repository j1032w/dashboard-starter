import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasComponentViewComponent } from './das-component-view.component';

describe('ComponentViewComponent', () => {
  let component: DasComponentViewComponent;
  let fixture: ComponentFixture<DasComponentViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DasComponentViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DasComponentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
