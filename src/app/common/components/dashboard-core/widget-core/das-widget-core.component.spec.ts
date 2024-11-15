import { ComponentFixture, TestBed } from '@angular/core/testing';
import {DasCommonModule} from '../../../das-common.module';
import { DasWidgetCoreComponent } from './das-widget-core.component';

describe('WidgetComponent', () => {
  let component: DasWidgetCoreComponent;
  let fixture: ComponentFixture<DasWidgetCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DasCommonModule]
    }).compileComponents();

    fixture = TestBed.createComponent(DasWidgetCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
