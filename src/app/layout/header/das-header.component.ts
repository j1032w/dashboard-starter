import { Component } from '@angular/core';
import { MatBadge } from '@angular/material/badge';
import { RouterLink } from '@angular/router';
import { FeatherModule } from 'angular-feather';
import { TooltipModule } from 'primeng/tooltip';

import { DasBaseComponent } from '../../common/components/das-component-base.component';
import { DasIconsModule } from '../../common/components/modules/das-icons.module';
import { DasLayoutService } from '../services/das-layout.service';

@Component({
  selector: 'das-header',
  templateUrl: './das-header.component.html',
  styleUrls: ['./das-header.component.scss'],
  standalone: true,
  imports: [FeatherModule, RouterLink, MatBadge, TooltipModule, DasIconsModule]
})
export class DasHeaderComponent extends DasBaseComponent {
  constructor(public readonly layoutService: DasLayoutService) {
    super();
  }

  openLink(url: string) {
    window.open(url, '_blank');
  }
}
