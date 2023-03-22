import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {DasComponentBase} from '../../components/das-component-base.component';




@Component({
  selector: 'das-header',
  templateUrl: './das-header.component.html',
  styleUrls: ['./das-header.component.scss'],

})
export class DasHeaderComponent extends DasComponentBase {
  menus: any[] = [];

  constructor(private readonly router:Router) {
    super();

  }

  onClick(){

   this.router.navigateByUrl('product/id-456/msi').then();
   // this.router.navigate(['product', 'id-123', 'ASUS']).then();
  }

}
