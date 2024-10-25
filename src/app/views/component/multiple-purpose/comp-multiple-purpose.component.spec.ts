import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { FeatherModule } from 'angular-feather';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
import { CommonTestConfig } from '../../../common/test-services/common-test-config';
import { DasComponentViewRoutingModule } from '../das-component-view-routing.module';
import { DasComponentViewModule } from '../das-component-view.module';
import { DasComponentFormModule } from '../form/das-component-form.module';
import { CompMultiplePurposeComponent } from './comp-multiple-purpose.component';

describe('CompButtonComponent', () => {
  let component: CompMultiplePurposeComponent;
  let fixture: ComponentFixture<CompMultiplePurposeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ...CommonTestConfig.imports,
        DasComponentViewModule,
        DasComponentViewRoutingModule,
        FeatherModule,
        DasComponentFormModule,
        ButtonModule,
        ConfirmDialogModule,
        ToastModule,
        RatingModule,
        CardModule,
        SelectButtonModule,
        TabViewModule,
        RadioButtonModule,
        FormsModule,
        AvatarModule,
        BadgeModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CompMultiplePurposeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
