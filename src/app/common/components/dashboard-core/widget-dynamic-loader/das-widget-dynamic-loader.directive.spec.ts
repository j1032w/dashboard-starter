import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasToastService } from '../../../services/das-toast.service';
import { CommonTestConfig } from '../../../test-services/common-test-config';
import { DasDashboardCoreModule } from '../das-dashboard-core.module';
import { DasDashboardCoreEventService } from '../services/das-dashboard-core-event.service';
import { DasWidgetBaseComponent } from '../services/das-widget-base.component';
import { DasWidgetOption } from '../services/das-widget-option';

const testComponentTemplate = '<div class="test-widget">test</div>';

@Component({
  selector: 'das-dv-demo-a-widget',
  template: testComponentTemplate
})
export class TestWidgetComponent extends DasWidgetBaseComponent {
  @Input() frontText = 'A';
  @Input() backText = 'A Back';

  constructor(
    protected override readonly dashboardCoreService: DasDashboardCoreEventService,
    protected override readonly toastService: DasToastService
  ) {
    super(dashboardCoreService, toastService);
  }
}

@Component({
  template: ` <ng-container dasWidgetDynamicLoader [widgetOption]="widgetOption"></ng-container>`
})
class ParentComponent {
  widgetOption = new DasWidgetOption({
    originalRows: 4,
    isSettingModalVisible: false,
    cols: 2,
    rows: 7,
    x: 3,
    y: 7,
    widgetClassName: 'TestWidgetComponent',
    title: 'Demo D',
    isMinimized: false,
    isShowRefreshButton: false,
    isShowFlipButton: false,
    isFrontShown: true
  });
}

describe('DasWidgetDynamicLoaderDirective', () => {
  let fixture: ComponentFixture<ParentComponent>;
  let dashboardCoreService: DasDashboardCoreEventService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParentComponent, TestWidgetComponent],
      imports: [...CommonTestConfig.imports, DasDashboardCoreModule]
    }).compileComponents();

    dashboardCoreService = TestBed.inject(DasDashboardCoreEventService);
    dashboardCoreService.widgetMap.set('TestWidgetComponent', {
      name: 'test widget',
      type: TestWidgetComponent,
      cols: 3,
      rows: 5
    });

    fixture = TestBed.createComponent(ParentComponent);
    fixture.detectChanges();
  });

  it('should be stared', () => {
    const innerHTML = fixture.nativeElement.innerHTML;
    expect(innerHTML.indexOf(testComponentTemplate)).toBeTruthy();
  });
});
