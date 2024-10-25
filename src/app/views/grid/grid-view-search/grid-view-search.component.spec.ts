import { ComponentFixture, TestBed } from '@angular/core/testing';
import {CommonTestConfig} from '../../../common/test-services/common-test-config';
import {DasGridViewModule} from '../das-grid-view.module';

import { GridViewSearchComponent } from './grid-view-search.component';

describe('GridViewSearchComponent', () => {
  let component: GridViewSearchComponent;
  let fixture: ComponentFixture<GridViewSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [...CommonTestConfig.imports, DasGridViewModule]
    }).compileComponents();

    fixture = TestBed.createComponent(GridViewSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
