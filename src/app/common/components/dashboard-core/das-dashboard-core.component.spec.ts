import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasLocalStorageService } from '../../services/das-local-storage.service';
import { CommonTestConfig } from '../../test-services/common-test-config';
import { LocalStorageServiceMock } from '../../test-services/local-storage-service.mock';
import { DasDashboardCoreComponent } from './das-dashboard-core.component';
import { DasDashboardCoreModule } from './das-dashboard-core.module';
import { DasWidgetOption } from './services/das-widget-option';

describe('DasDashboardComponent', () => {
  let component: DasDashboardCoreComponent;
  let fixture: ComponentFixture<DasDashboardCoreComponent>;
  let dasLocalStorageService: DasLocalStorageService;
  let widgetOptions: DasWidgetOption[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DasDashboardCoreModule, ...CommonTestConfig.imports],
      providers: [...CommonTestConfig.providers]
    }).compileComponents();

    widgetOptions = [
      new DasWidgetOption({
        id: 1,
        title: 'Widget 1',
        cols: 2,
        rows: 2,
        x: 0,
        y: 0
      }),

      new DasWidgetOption({
        id: 2,
        title: 'Widget 2',
        cols: 2,
        rows: 2,
        x: 2,
        y: 0
      })
    ];

    dasLocalStorageService = TestBed.inject(DasLocalStorageService);
    dasLocalStorageService['storage'] = new LocalStorageServiceMock();

    fixture = TestBed.createComponent(DasDashboardCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load widget options from localStorage', () => {
    dasLocalStorageService.setItem(component['localStorageWidgetOptionsKey'], widgetOptions);

    component['getSetting']();

    expect(component.widgetOptions).toEqual(widgetOptions);
  });
});
