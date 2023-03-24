import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiAnimationComponent } from './ui-animation.component';

describe('UiAnimationComponent', () => {
  let component: UiAnimationComponent;
  let fixture: ComponentFixture<UiAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiAnimationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
