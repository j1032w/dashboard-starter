import { DashboardWidgetComponent } from '../widget/dashboard-widget.component';

export class DasWidgetConfig {
  cols: number;
  rows: number;
  x: number;
  y: number;
  readonly hasContent = true;

  id: number;
  title: string;
  isMinimized: boolean;
  isShowFlipButton: boolean;
  isShowRefreshButton: boolean;
  widgetComponentClass: any;
  backComponentClass: any;

  originalRows = 1;

  constructor(data?: Partial<DasWidgetConfig>) {
    this.cols = data?.cols ?? 1;
    this.rows = data?.rows ?? 1;
    this.x = data?.x ?? 0;
    this.y = data?.y ?? 0;

    this.id = data?.id ?? 0;
    this.title = data?.title ?? '';
    this.isMinimized = data?.isMinimized ?? false;
    this.isShowRefreshButton = data?.isShowRefreshButton ?? false;
    this.isShowFlipButton = data?.isShowFlipButton ?? false;
    this.widgetComponentClass = data?.widgetComponentClass ?? DashboardWidgetComponent;
    this.backComponentClass = data?.backComponentClass ?? null;
    this.originalRows = this.rows;

  }
}
