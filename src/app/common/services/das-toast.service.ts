import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable()
export class DasToastService {

  constructor(private readonly messageService: MessageService) {
  }

  showSuccess = (detail: string) => {
    this.messageService.add({
      severity: 'success',
      summary: '',
      detail
    });
  };

  showError = (detail: string) => {
    this.messageService.add({
      severity: 'error',
      summary: '',
      detail
    });
  };
}
