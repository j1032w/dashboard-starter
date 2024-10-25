import { ComponentFixture, TestBed } from '@angular/core/testing';
import {CommonTestConfig} from '../../common/test-services/common-test-config';

import { DasHeaderComponent } from './das-header.component';

describe('AdmHeaderComponent', () => {
  let component: DasHeaderComponent;
  let fixture: ComponentFixture<DasHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DasHeaderComponent],
      imports: [...CommonTestConfig.imports]
    }).compileComponents();

    fixture = TestBed.createComponent(DasHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
