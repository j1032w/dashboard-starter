import { Component } from '@angular/core';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'das-comp-notification',
  templateUrl: './comp-notification.component.html',
  styleUrls: ['./comp-notification.component.scss'],
  providers: [MessageService, ConfirmationService],
  standalone: true,
  imports: [ConfirmDialogModule, ToastModule]
})
export class CompNotificationComponent {
  constructor(
    private readonly messageService: MessageService,
    private readonly confirmationService: ConfirmationService
  ) {}

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
