import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonTestConfig } from '../common/test-services/common-test-config';
import { DasLayoutComponent } from './das-layout.component';

describe('LayoutComponent', () => {
  let component: DasLayoutComponent;
  let fixture: ComponentFixture<DasLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [...CommonTestConfig.imports],
      providers: [...CommonTestConfig.providers]
    }).compileComponents();

    fixture = TestBed.createComponent(DasLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
