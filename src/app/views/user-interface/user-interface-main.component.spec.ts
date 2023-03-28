import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DasUserInterfaceMainComponent } from './user-interface-main.component';



describe('UiInterfaceComponent', () => {
  let component: DasUserInterfaceMainComponent;
  let fixture: ComponentFixture<DasUserInterfaceMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DasUserInterfaceMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DasUserInterfaceMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
