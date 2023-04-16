import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasRealtorQueryBuilderComponent } from './das-realtor-query-builder.component';

describe('QueryBuilderComponent', () => {
  let component: DasRealtorQueryBuilderComponent;
  let fixture: ComponentFixture<DasRealtorQueryBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DasRealtorQueryBuilderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DasRealtorQueryBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
