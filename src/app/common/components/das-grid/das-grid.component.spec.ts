import { ComponentFixture, TestBed } from '@angular/core/testing';
import {CommonTestConfig} from '../../test-services/common-test-config';
import {DasAutoSizeComponent} from '../das-auto-size/das-auto-size.component';

import { DasGridComponent } from './das-grid.component';
import {DasGridModule} from './das-grid.module';

describe('DasGridComponent', () => {
  let component: DasGridComponent;
  let fixture: ComponentFixture<DasGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DasAutoSizeComponent],
      imports: [...CommonTestConfig.imports, DasGridModule]

    }).compileComponents();

    fixture = TestBed.createComponent(DasGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
