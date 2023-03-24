import { Injectable } from '@angular/core';
import { DasLayout } from './dasLayout';

@Injectable({ providedIn: 'root' })
export class DasLayoutService {

  layout = new DasLayout();

  toggleSidebar() {
    this.layout.isShowSidebar = !this.layout.isShowSidebar;
  }

}
