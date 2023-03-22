import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasBreadcrumbComponent } from './das-breadcrumb.component';

describe('BreadcrumbComponent', () => {
  let component: DasBreadcrumbComponent;
  let fixture: ComponentFixture<DasBreadcrumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DasBreadcrumbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DasBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
