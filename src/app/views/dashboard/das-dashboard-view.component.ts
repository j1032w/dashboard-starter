import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DasComponentBase} from '../../components/das-component-base.component';


@Component({
  selector: 'das-dashboard-view',
  templateUrl: './das-dashboard-view.component.html',
  styleUrls: ['./das-dashboard-view.component.scss']
})
export class DasDashboardViewComponent extends DasComponentBase implements OnInit{


  constructor(private readonly activatedRoute:ActivatedRoute) {
    super();
  }

  ngOnInit() {
    console.log('dashboard ngOnInit() called');
  }

  onClick(){
    console.log(this.activatedRoute.snapshot);
  }
}
