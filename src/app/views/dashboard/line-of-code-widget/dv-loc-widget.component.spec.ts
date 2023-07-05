import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonTestConfig } from '../../../common/test-services/common-test-config';
import { DvLocWidgetComponent } from './dv-loc-widget.component';
import { DvLocWidgetModule } from './dv-loc-widget.module';

describe('LineOfCodeWidgetComponent', () => {
  let component: DvLocWidgetComponent;
  let fixture: ComponentFixture<DvLocWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [...CommonTestConfig.imports, DvLocWidgetModule]
    }).compileComponents();

    fixture = TestBed.createComponent(DvLocWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
