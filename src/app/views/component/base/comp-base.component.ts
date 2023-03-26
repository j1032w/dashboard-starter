import { Component } from '@angular/core';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';

@Component({
  selector: 'das-comp-base',
  templateUrl: './comp-base.component.html',
  styleUrls: ['./comp-base.component.scss'],
  providers: [ConfirmationService, MessageService]
})
export class CompBaseComponent {

  selectButtonStateOptions = [{label: 'Off', value: 'off'}, {label: 'On', value: 'on'}];

  constructor(private readonly confirmationService: ConfirmationService,
              private readonly messageService: MessageService) {
  }

  delete(){
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.messageService.add({ severity: 'success', detail: 'Record deleted' });
      },
      reject: (type:ConfirmEventType) => {
        switch (type) {
          case ConfirmEventType.REJECT:
            this.messageService.add({ severity: 'info', detail: 'You have rejected' });
            break;
          case ConfirmEventType.CANCEL:
            this.messageService.add({ severity: 'warn', summary: 'Cancelled', detail: 'You have cancelled' });
            break;
        }
      }
    });
  }
}
