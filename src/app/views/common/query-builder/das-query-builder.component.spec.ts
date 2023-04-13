import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasQueryBuilderComponent } from './das-query-builder.component';

describe('QueryBuilderComponent', () => {
  let component: DasQueryBuilderComponent;
  let fixture: ComponentFixture<DasQueryBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DasQueryBuilderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DasQueryBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
