import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DasSpinnerComponent } from './das-spinner.component';

describe('DasSpinnerComponent', () => {
  let component: DasSpinnerComponent;
  let fixture: ComponentFixture<DasSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: []
    }).compileComponents();

    fixture = TestBed.createComponent(DasSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
