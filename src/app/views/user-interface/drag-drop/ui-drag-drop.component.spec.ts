import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiDragDropComponent } from './ui-drag-drop.component';

describe('DragDropComponent', () => {
  let component: UiDragDropComponent;
  let fixture: ComponentFixture<UiDragDropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiDragDropComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiDragDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
