import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, takeUntil } from 'rxjs';

import { DasServiceBaes } from '../../../common/services/das-service-baes';

@Injectable({ providedIn: 'root' })
export class BreadcrumbService extends DasServiceBaes {
  // private breadcrumbItemsSubject$: BehaviorSubject<BreadcrumbItemInterface[]> =
  //   new BehaviorSubject<BreadcrumbItemInterface[]>(new Array<BreadcrumbItemInterface>());
  //
  // breadcrumbItems$: Observable<BreadcrumbItemInterface[]> = this.breadcrumbItemsSubject$.asObservable();

  breadcrumbItems: BreadcrumbItemInterface[] = [];

  constructor(readonly router: Router, readonly activatedRoute: ActivatedRoute) {
    super();

    router.events
      .pipe(
        takeUntil(this.destroyed$),
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe(() => {
        this.breadcrumbItems = [];

        let url = '';
        let currentRoute: ActivatedRoute | null = activatedRoute.root;

        do {
          const childrenRoutes = currentRoute.children;
          currentRoute = null;

          childrenRoutes.forEach(route => {
            if (route.outlet === 'primary') {
              const routeSnapshot = route.snapshot;
              url += '/' + routeSnapshot.url.map(segment => segment.path).join('/');
              this.breadcrumbItems.push({
                label: route.snapshot.data['label'],
                path: url
              });

              currentRoute = route;
            }
          });
        } while (currentRoute);
      });
  }
}

export interface BreadcrumbItemInterface {
  label: string;
  path?: string;
}
