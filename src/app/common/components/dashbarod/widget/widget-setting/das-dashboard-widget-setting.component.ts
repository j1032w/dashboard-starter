import { Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'das-dashboard-widget-setting',
  templateUrl: './das-dashboard-widget-setting.component.html',
  styleUrls: ['./das-dashboard-widget-setting.component.scss']
})
export class DasDashboardWidgetSettingComponent {
  modalRef?: BsModalRef;

  constructor(private modalService: BsModalService) {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
