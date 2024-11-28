import { ScrollingModule } from '@angular/cdk/scrolling';
import {DecimalPipe} from '@angular/common';
import {
  Component,
  OnInit
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  NgScrollbar,
  NgScrollbarExt
} from 'ngx-scrollbar';
import {NgScrollbarCdkVirtualScroll} from 'ngx-scrollbar/cdk';
import { MessageService } from 'primeng/api';
import { InputNumberModule } from 'primeng/inputnumber';
import {DasToastService} from '../../../common/services/das-toast.service';

@Component({
  selector: 'das-ui-virtual-scroll',
  templateUrl: './ui-virtual-scroll.component.html',
  styleUrls: ['./ui-virtual-scroll.component.scss'],
  providers: [MessageService],
  standalone: true,
  imports: [
    InputNumberModule,
    FormsModule,
    NgScrollbar,
    ScrollingModule,
    NgScrollbarExt,
    NgScrollbarCdkVirtualScroll,
    DecimalPipe
  ],
  host: {
    class: 'p-3 h-100'
  }
})
export class UiVirtualScrollComponent implements OnInit {
  amount = 10000;
  items: number[] = [];

  constructor(private readonly messageService: DasToastService) {
  }

  ngOnInit() {
    this.setAmount();
  }


  setAmount() {
    this.items = Array.from({ length: this.amount }).map((_, i) => i);
    this.messageService.showSuccess('The list has be reloaded');

  }
}


// cdkVirtualScrollViewport, calculate the total height of the scrollable container by multiplying the number of items by the item size (e.g., 16px in this component). When set a very large number of items, the total size of the container exceeds the maximum safe integer value that JavaScript can handle accurately for calculations (Number.MAX_SAFE_INTEGER, which is 253−1253−1).
// For example, set amount to 10,000,000 (10M):
// 10,000,000 items × 16px/item = 160,000,000px (exceeds safe precision).
// One solution is to divide the array into smaller chunks and manage the chunks by scrolledIndexChange event.
// While it's possible to handle real large items virtually, consider whether the user needs all of them at once. For better performance, reduce the total number of items displayed or allow the user to filter the data.

