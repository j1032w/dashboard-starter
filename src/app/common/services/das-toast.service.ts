import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({ providedIn: 'root' })
export class DasToastService {
  // option is set in das-common.module.ts, ToastrModule.forRoot({
  constructor(private toastr: ToastrService) {}

  showSuccess = (message: string) => {
    this.toastr.success(message);
  };

  showError = (message: string) => {
    this.toastr.error(message);
  };
}
