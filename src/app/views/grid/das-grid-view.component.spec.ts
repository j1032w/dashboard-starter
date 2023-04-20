import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasGridViewComponent } from './das-grid-view.component';

describe('GridComponent', () => {
  let component: DasGridViewComponent;
  let fixture: ComponentFixture<DasGridViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DasGridViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DasGridViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
