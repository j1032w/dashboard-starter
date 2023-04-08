import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasDashboardCoreComponent } from './das-dashboard-core.component';

describe('DasDashboardComponent', () => {
  let component: DasDashboardCoreComponent;
  let fixture: ComponentFixture<DasDashboardCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DasDashboardCoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DasDashboardCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
