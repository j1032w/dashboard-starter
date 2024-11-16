import { ComponentFixture, TestBed } from '@angular/core/testing';
import {CommonTestConfig} from '../../../common/test-services/common-test-config';
import { UiDragDropComponent } from './ui-drag-drop.component';

describe('DragDropComponent', () => {
  let component: UiDragDropComponent;
  let fixture: ComponentFixture<UiDragDropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [...CommonTestConfig.imports],
    }).compileComponents();

    fixture = TestBed.createComponent(UiDragDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
