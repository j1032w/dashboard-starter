export class DasWidget {
  cols: number;
  rows: number;
  x: number;
  y: number;
  readonly hasContent = true;

  title: string;
  frontComponentClass = '';
  backComponentClass = '';

  constructor(data: Partial<DasWidget>) {
    this.cols = data?.cols ?? 1;
    this.rows = data?.rows ?? 1;
    this.x = data?.x ?? 0;
    this.y = data?.y ?? 0;
    this.title = data?.title ?? '';

  }
}
