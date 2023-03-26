import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'das-comp-notification',
  templateUrl: './comp-notification.component.html',
  styleUrls: ['./comp-notification.component.scss'],
  providers: [MessageService]
})
export class CompNotificationComponent {


  constructor(private readonly messageService:MessageService) {
  }



  sendToast(severity:string){
    this.messageService.add({severity,  detail: 'message content' });
  }
}
