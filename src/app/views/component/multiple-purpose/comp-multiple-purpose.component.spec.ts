import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonTestConfig } from '../../../common/test-services/common-test-config';

import { CompMultiplePurposeComponent } from './comp-multiple-purpose.component';

describe('CompButtonComponent', () => {
  let component: CompMultiplePurposeComponent;
  let fixture: ComponentFixture<CompMultiplePurposeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [...CommonTestConfig.imports]
    }).compileComponents();

    fixture = TestBed.createComponent(CompMultiplePurposeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
