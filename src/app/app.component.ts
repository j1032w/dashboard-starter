import {Component, OnDestroy} from '@angular/core';
import {IconService} from '@ant-design/icons-angular';
import {AccountBookFill} from '@ant-design/icons-angular/icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dashboard starter';

  constructor(readonly iconService: IconService) {
    this.iconService.addIcon(...[ AccountBookFill ]);
    this.iconService.twoToneColor = { primaryColor: '#1890ff' };
  }
}
