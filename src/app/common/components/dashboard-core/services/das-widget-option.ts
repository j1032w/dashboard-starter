export class DasWidgetOption {
  cols: number;
  rows: number;
  x: number;
  y: number;
  hasContent:boolean = true;

  id: number;
  isMinimized: boolean;
  isShowFlipButton: boolean;
  isShowRefreshButton: boolean;
  isFrontShown: boolean;
  widgetClassName: string;

  originalRows = 1;

  isSettingModalVisible = false;

  title = '';
  settingData: any;

  constructor(data?: Partial<DasWidgetOption>) {
    this.cols = data?.cols ?? 5;
    this.rows = data?.rows ?? 7;
    this.x = data?.x ?? 0;
    this.y = data?.y ?? 0;

    this.id = data?.id ?? 0;
    this.widgetClassName = data?.widgetClassName ?? '';
    this.title = data?.title ?? '';
    this.settingData = data?.settingData ?? {};
    this.isMinimized = data?.isMinimized ?? false;
    this.isShowRefreshButton = data?.isShowRefreshButton ?? false;
    this.isShowFlipButton = data?.isShowFlipButton ?? false;
    this.isFrontShown = data?.isFrontShown ?? true;
    this.originalRows = this.rows;

  }
}

