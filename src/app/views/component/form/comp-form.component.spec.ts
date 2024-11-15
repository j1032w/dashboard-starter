import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonTestConfig } from '../../../common/test-services/common-test-config';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { CompFormComponent } from './comp-form.component';


describe('FormComponent', () => {
  let component: CompFormComponent;
  let fixture: ComponentFixture<CompFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [...CommonTestConfig.imports, NgScrollbarModule]
    }).compileComponents();

    fixture = TestBed.createComponent(CompFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
