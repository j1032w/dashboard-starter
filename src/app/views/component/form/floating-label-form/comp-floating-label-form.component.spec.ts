import { ComponentFixture, TestBed } from '@angular/core/testing';
import {CommonTestConfig} from '../../../../common/test-services/common-test-config';
import {DasComponentFormModule} from '../das-component-form.module';

import { CompFloatingLabelFormComponent } from './comp-floating-label-form.component';

describe('FloatingLabelFormComponent', () => {
  let component: CompFloatingLabelFormComponent;
  let fixture: ComponentFixture<CompFloatingLabelFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [...CommonTestConfig.imports, DasComponentFormModule]
    }).compileComponents();

    fixture = TestBed.createComponent(CompFloatingLabelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
