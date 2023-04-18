import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonTestConfig } from '../../common/test-services/common-test-config';


import { DasBreadcrumbComponent } from './das-breadcrumb.component';
import { DasBreadcrumbModule } from './das-breadcrumb.module';

describe('BreadcrumbComponent', () => {
  let component: DasBreadcrumbComponent;
  let fixture: ComponentFixture<DasBreadcrumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [...CommonTestConfig.imports, DasBreadcrumbModule],
      providers: [...CommonTestConfig.providers]
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
