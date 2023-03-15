import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiHorizontalFormComponent } from './ui-horizontal-form.component';

describe('HorizontalFormComponent', () => {
  let component: UiHorizontalFormComponent;
  let fixture: ComponentFixture<UiHorizontalFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiHorizontalFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiHorizontalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
