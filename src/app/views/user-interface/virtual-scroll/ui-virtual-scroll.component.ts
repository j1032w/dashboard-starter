import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import { NgScrollbar, ScrollViewport } from 'ngx-scrollbar';
import { CdkVirtualScrollViewport, CdkFixedSizeVirtualScroll, CdkVirtualForOf } from '@angular/cdk/scrolling';

@Component({
    selector: 'das-ui-virtual-scroll',
    templateUrl: './ui-virtual-scroll.component.html',
    styleUrls: ['./ui-virtual-scroll.component.scss'],
    providers: [MessageService],
    standalone: true,
    imports: [InputNumberModule, FormsModule, NgScrollbar, CdkVirtualScrollViewport, CdkFixedSizeVirtualScroll, ScrollViewport, CdkVirtualForOf]
})
export class UiVirtualScrollComponent {
  amount = 10000;
  items: number[] = [];

  constructor(private messageService: MessageService) {
    this.setAmount();
  }

  setAmount() {
    this.items = Array.from({ length: this.amount }).map((_, i) => i);
    this.messageService.add({ severity: 'success', detail: 'The list has be reloaded' });
  }
}
