import { Component } from '@angular/core';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';

@Component({
  selector: 'das-comp-notification',
  templateUrl: './comp-notification.component.html',
  styleUrls: ['./comp-notification.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class CompNotificationComponent {


  constructor(
    private readonly messageService: MessageService,
    private readonly confirmationService: ConfirmationService
  ) {
  }


  sendToast(severity: string) {
    this.messageService.add({ severity, detail: 'message content' });
  }

  delete() {
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.messageService.add({ severity: 'success', detail: 'Record deleted' });
      },
      reject: (type: ConfirmEventType) => {
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
