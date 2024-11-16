import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonTestConfig } from '../../../common/test-services/common-test-config';

import { UiVirtualScrollComponent } from './ui-virtual-scroll.component';

describe('VirtualScrollComponent', () => {
  let component: UiVirtualScrollComponent;
  let fixture: ComponentFixture<UiVirtualScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [...CommonTestConfig.imports]
    }).compileComponents();

    fixture = TestBed.createComponent(UiVirtualScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
