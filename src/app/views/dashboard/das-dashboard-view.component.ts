import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, takeUntil } from 'rxjs';
import {DasComponentBase} from '../../components/das-component-base.component';
import { BreadcrumbService } from '../../layout/breadcrumb/services/breadcrumb.service';


@Component({
  selector: 'das-dashboard-view',
  templateUrl: './das-dashboard-view.component.html',
  styleUrls: ['./das-dashboard-view.component.scss']
})
export class DasDashboardViewComponent extends DasComponentBase implements OnInit{


  constructor(private readonly activatedRoute: ActivatedRoute,
              private readonly router: Router,
              private readonly breadcrumbService: BreadcrumbService) {
    super();

    this.router.events
      .pipe(
        takeUntil(this.ngUnsubscribe),
        filter((event) => event instanceof NavigationEnd)
      )
      .subscribe((event) => {
        console.log(this.activatedRoute);

        // do {
        //   const childrenRoutes: ActivatedRoute[] = this.activatedRoute.root.children;
        //
        //   for (const childrenRoute of childrenRoutes) {
        //
        //   }
        //
        //
        //   });
        // } while (currentRoute);
      });


  }

  ngOnInit() {
    console.log('dashboard ngOnInit() called');
  }

  onClick(){
    console.log(this.activatedRoute.snapshot);
  }
}
