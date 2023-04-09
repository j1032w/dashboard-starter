import { Component, OnInit } from '@angular/core';
import { DasComponentBase } from '../../../common/components/das-component-base.component';
import { RealtorRepositoryService } from '../../services/realtorRepositoryService';


@Component({
  selector: 'das-comp-grid',
  templateUrl: './comp-grid.component.html',
  styleUrls: ['./comp-grid.component.scss']
})
export class CompGridComponent extends DasComponentBase implements OnInit{
  constructor(private readonly realtorRepositoryService :RealtorRepositoryService
  ) {
    super();
  }

  ngOnInit() {
    this.realtorRepositoryService.fetchData$().subscribe(data=>{
      console.log(data);
    })
  }
}
