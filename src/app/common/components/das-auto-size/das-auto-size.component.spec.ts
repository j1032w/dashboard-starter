import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasAutoSizeComponent } from './das-auto-size.component';

describe('DasAutoSizeComponent', () => {
  let component: DasAutoSizeComponent;
  let fixture: ComponentFixture<DasAutoSizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DasAutoSizeComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(DasAutoSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
