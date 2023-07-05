import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiVirtualScrollComponent } from './ui-virtual-scroll.component';

describe('VirtualScrollComponent', () => {
  let component: UiVirtualScrollComponent;
  let fixture: ComponentFixture<UiVirtualScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiVirtualScrollComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(UiVirtualScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
