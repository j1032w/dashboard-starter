import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'das-ui-virtual-scroll',
  templateUrl: './ui-virtual-scroll.component.html',
  styleUrls: ['./ui-virtual-scroll.component.scss'],
  providers: [MessageService]
})
export class UiVirtualScrollComponent {

  amount = 10000;
  items: number[] = [];

  constructor(private messageService: MessageService) {
    this.setAmount();
  }

  setAmount() {
    this.items = Array.from({ length: this.amount }).map((_, i) => i);
    this.messageService.add({ severity: 'success',  detail: 'The list has be reloaded' });

  }
}
