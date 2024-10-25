import { ComponentFixture, TestBed } from '@angular/core/testing';
import {CommonTestConfig} from '../../../common/test-services/common-test-config';
import {DasUserInterfaceModule} from '../das-user-interface.module';

import { UiQueryBuilderComponent } from './ui-query-builder.component';

describe('QueryBuilderComponent', () => {
  let component: UiQueryBuilderComponent;
  let fixture: ComponentFixture<UiQueryBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiQueryBuilderComponent],
      imports: [...CommonTestConfig.imports, DasUserInterfaceModule]
    }).compileComponents();

    fixture = TestBed.createComponent(UiQueryBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
