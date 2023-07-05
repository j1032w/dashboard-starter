import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CommonTestConfig } from '../common/test-services/common-test-config';
import { DasLayoutComponent } from './das-layout.component';
import { DasLayoutModule } from './layout.module';

describe('LayoutComponent', () => {
  let component: DasLayoutComponent;
  let fixture: ComponentFixture<DasLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [...CommonTestConfig.imports, DasLayoutModule, BrowserAnimationsModule],
      providers: [...CommonTestConfig.providers]
    }).compileComponents();

    fixture = TestBed.createComponent(DasLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
