import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridViewSearchComponent } from './grid-view-search.component';

describe('GridViewSearchComponent', () => {
  let component: GridViewSearchComponent;
  let fixture: ComponentFixture<GridViewSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GridViewSearchComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(GridViewSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
