import {Injectable} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {BehaviorSubject, filter, Observable, takeUntil} from 'rxjs';
import {DasServiceBaes} from '../../../common/services/das-service-baes';

@Injectable({providedIn: 'root'})
export class BreadcrumbService extends DasServiceBaes {

  private breadcrumbItemsSubject$: BehaviorSubject<BreadcrumbItemInterface[]> =
    new BehaviorSubject<BreadcrumbItemInterface[]>(new Array<BreadcrumbItemInterface>());

  breadcrumbItems$: Observable<BreadcrumbItemInterface[]> = this.breadcrumbItemsSubject$.asObservable();


  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) {
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
}



export interface BreadcrumbItemInterface {
  label: string;
  url?: string ;

}
