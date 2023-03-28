import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonTestConfig } from '../../common/services/common-test-config';

import { DasDashboardMainComponent } from './das-dashboard-main.component';
import { DasDashboardViewModule } from './das-dashboard-view.module';

describe('DasDashbaordComponent', () => {
  let component: DasDashboardMainComponent;
  let fixture: ComponentFixture<DasDashboardMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [...CommonTestConfig.imports, DasDashboardViewModule],
      providers: [...CommonTestConfig.providers]

    })
      .compileComponents();

    fixture = TestBed.createComponent(DasDashboardMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
