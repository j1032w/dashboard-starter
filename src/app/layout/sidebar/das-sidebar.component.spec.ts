import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonTestConfig } from '../../common/test-services/common-test-config';


import { DasSidebarComponent } from './das-sidebar.component';
import { DasSidebarModule } from './das-sidebar.module';

describe('AdmSidebarComponent', () => {
  let component: DasSidebarComponent;
  let fixture: ComponentFixture<DasSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [...CommonTestConfig.imports, DasSidebarModule],
      providers: [...CommonTestConfig.providers]

    })
      .compileComponents();

    fixture = TestBed.createComponent(DasSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
