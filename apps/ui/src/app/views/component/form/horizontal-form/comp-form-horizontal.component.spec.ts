import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonTestConfig } from '../../../../common/test-services/common-test-config';

import { CompFormHorizontalComponent } from './comp-form-horizontal.component';

describe('HorizontalFormComponent', () => {
  let component: CompFormHorizontalComponent;
  let fixture: ComponentFixture<CompFormHorizontalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [...CommonTestConfig.providers],
      imports: [CompFormHorizontalComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CompFormHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
