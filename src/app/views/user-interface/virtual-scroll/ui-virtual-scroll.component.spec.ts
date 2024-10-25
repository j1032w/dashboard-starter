import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonTestConfig } from '../../../common/test-services/common-test-config';
import { DasUserInterfaceModule } from '../das-user-interface.module';

import { UiVirtualScrollComponent } from './ui-virtual-scroll.component';

describe('VirtualScrollComponent', () => {
  let component: UiVirtualScrollComponent;
  let fixture: ComponentFixture<UiVirtualScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiVirtualScrollComponent],
      imports: [...CommonTestConfig.imports, DasUserInterfaceModule]
    }).compileComponents();

    fixture = TestBed.createComponent(UiVirtualScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
