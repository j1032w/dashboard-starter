import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasWidgetComponent } from './canvas-widget.component';

describe('CanvasTitleComponent', () => {
  let component: CanvasWidgetComponent;
  let fixture: ComponentFixture<CanvasWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanvasWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CanvasWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
