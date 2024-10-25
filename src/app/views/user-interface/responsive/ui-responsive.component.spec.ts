import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NgxAngularQueryBuilderModule } from 'ngx-angular-query-builder';

import { NgScrollbarModule } from 'ngx-scrollbar';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { MessagesModule } from 'primeng/messages';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DasCommonModule } from '../../../common/das-common.module';
import { CommonTestConfig } from '../../../common/test-services/common-test-config';
import { DasHousingMarketQueryBuilderModule } from '../../common/hosing-market-query-builder/das-housing-market-query-builder.module';
import { DasComponentFormModule } from '../../component/form/das-component-form.module';
import { DasUserInterfaceRoutingModule } from '../das-user-interface-routing.module';

import { UiResponsiveComponent } from './ui-responsive.component';

describe('ResponsiveComponent', () => {
  let component: UiResponsiveComponent;
  let fixture: ComponentFixture<UiResponsiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiResponsiveComponent],
      imports: [
        ...CommonTestConfig.imports,
        CardModule,
        DasCommonModule,
        DasComponentFormModule,
        DasHousingMarketQueryBuilderModule,
        DasUserInterfaceRoutingModule,
        DialogModule,
        DragDropModule,
        FormsModule,
        InputNumberModule,
        MessagesModule,
        NgScrollbarModule,
        NgxAngularQueryBuilderModule,
        ScrollingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(UiResponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
