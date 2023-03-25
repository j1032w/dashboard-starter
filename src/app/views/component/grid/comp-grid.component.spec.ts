import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompGridComponent } from './comp-grid.component';

describe('CompGridComponent', () => {
  let component: CompGridComponent;
  let fixture: ComponentFixture<CompGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
