import { DisplayGrid, GridType } from 'angular-gridster2';

export const GRIDSTER_OPTIONS = {
  swap: true,
  pushItems: true,
  pushDirections: { north: true, east: true, south: true, west: true },
  pushResizeItems: true,

  displayGrid: DisplayGrid.OnDragAndResize,
  gridType: GridType.VerticalFixed,
  margin: 10,
  minCols: 12,
  maxCols: 12,
  mobileBreakpoint: 800,
  fixedColWidth: 100,
  fixedRowHeight: 45,
  minItemCols: 2,

  draggable: {
    enabled: true,
    disableScrollHorizontal: true,
    ignoreContent: true
  },

  resizable: {
    enabled: true,
    handles: {
      n: false,
      nw: false,
      ne: false
    }
  }
};
