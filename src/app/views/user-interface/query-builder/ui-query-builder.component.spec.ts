import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiQueryBuilderComponent } from './ui-query-builder.component';

describe('QueryBuilderComponent', () => {
  let component: UiQueryBuilderComponent;
  let fixture: ComponentFixture<UiQueryBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiQueryBuilderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiQueryBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
