import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DvRealtorWidgetComponent } from './dv-realtor-widget.component';

describe('RealtorWidgetComponent', () => {
  let component: DvRealtorWidgetComponent;
  let fixture: ComponentFixture<DvRealtorWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DvRealtorWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DvRealtorWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
