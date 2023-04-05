import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasWidgetComponent } from './das-widget.component';

describe('CanvasTitleComponent', () => {
  let component: DasWidgetComponent;
  let fixture: ComponentFixture<DasWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DasWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DasWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
