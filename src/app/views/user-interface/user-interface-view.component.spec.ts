import { ComponentFixture, TestBed } from '@angular/core/testing';
import {CommonTestConfig} from '../../common/test-services/common-test-config';

import { UserInterfaceViewComponent } from './user-interface-view.component';

describe('UiInterfaceComponent', () => {
  let component: UserInterfaceViewComponent;
  let fixture: ComponentFixture<UserInterfaceViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [...CommonTestConfig.imports, UserInterfaceViewComponent]
}).compileComponents();

    fixture = TestBed.createComponent(UserInterfaceViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
