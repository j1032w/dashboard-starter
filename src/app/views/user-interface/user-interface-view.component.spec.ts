import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DasUserInterfaceViewComponent } from './user-interface-main.component';



describe('UiInterfaceComponent', () => {
  let component: DasUserInterfaceViewComponent;
  let fixture: ComponentFixture<DasUserInterfaceViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DasUserInterfaceViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DasUserInterfaceViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
