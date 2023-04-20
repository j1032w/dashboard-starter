import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DvGridViewComponent } from './dv-grid-view.component';

describe('GridComponent', () => {
  let component: DvGridViewComponent;
  let fixture: ComponentFixture<DvGridViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DvGridViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DvGridViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
