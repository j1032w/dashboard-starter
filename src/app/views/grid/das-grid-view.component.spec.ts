import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonTestConfig } from '../../common/test-services/common-test-config';
import { DasGridViewComponent } from './das-grid-view.component';

describe('GridComponent', () => {
  let component: DasGridViewComponent;
  let fixture: ComponentFixture<DasGridViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [...CommonTestConfig.imports],
      providers: [...CommonTestConfig.providers],
    }).compileComponents();

    fixture = TestBed.createComponent(DasGridViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
