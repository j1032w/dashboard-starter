import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasWidgetDynamicLoaderDirective } from './das-widget-dynamic-loader.directive';

describe('WidgetContentComponent', () => {
  let component: DasWidgetDynamicLoaderDirective;
  let fixture: ComponentFixture<DasWidgetDynamicLoaderDirective>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DasWidgetDynamicLoaderDirective ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DasWidgetDynamicLoaderDirective);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
