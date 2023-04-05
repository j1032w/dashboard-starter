import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasDashboardComponent } from './das-dashboard.component';

describe('DasDashboardComponent', () => {
  let component: DasDashboardComponent;
  let fixture: ComponentFixture<DasDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DasDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DasDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
