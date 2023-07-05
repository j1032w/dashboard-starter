import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasGridComponent } from './das-grid.component';

describe('DasGridComponent', () => {
  let component: DasGridComponent;
  let fixture: ComponentFixture<DasGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DasGridComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(DasGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
