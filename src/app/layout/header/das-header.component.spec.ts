import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasHeaderComponent } from './das-header.component';

describe('AdmHeaderComponent', () => {
  let component: DasHeaderComponent;
  let fixture: ComponentFixture<DasHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DasHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DasHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
