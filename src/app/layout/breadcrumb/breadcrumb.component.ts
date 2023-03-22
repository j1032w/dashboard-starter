import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {takeUntil} from 'rxjs';
import {DasComponentBase} from '../../components/das-component-base.component';


@Component({
  selector: 'das-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent extends DasComponentBase implements OnInit {

  constructor(private readonly router: Router, private readonly activatedRoute: ActivatedRoute) {
    super();

    this.activatedRoute.params.subscribe((params) => {
     // console.log(params);
    });

    this.router.events.pipe(
      takeUntil(this.ngUnsubscribe),
      // filter(event => event instanceof NavigationEnd)
    )
      .subscribe((event) => {
        // console.log(event);

      })
  }

  ngOnInit() {

  }
}
