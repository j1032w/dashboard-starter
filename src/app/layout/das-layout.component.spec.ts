import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasLayoutComponent } from './das-layout.component';

describe('LayoutComponent', () => {
  let component: DasLayoutComponent;
  let fixture: ComponentFixture<DasLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DasLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DasLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
