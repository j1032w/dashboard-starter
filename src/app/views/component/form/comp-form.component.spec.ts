import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompFormComponent } from './comp-form.component';



describe('FormComponent', () => {
  let component: CompFormComponent;
  let fixture: ComponentFixture<CompFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
