import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonTestConfig } from '../../common/services/common-test-config';

import { DashboardViewComponent } from './dashboard-view.component';
import { DasDashboardViewModule } from './das-dashboard-view.module';

describe('DasDashbaordComponent', () => {
  let component: DashboardViewComponent;
  let fixture: ComponentFixture<DashboardViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [...CommonTestConfig.imports, DasDashboardViewModule],
      providers: [...CommonTestConfig.providers]

    })
      .compileComponents();

    fixture = TestBed.createComponent(DashboardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
