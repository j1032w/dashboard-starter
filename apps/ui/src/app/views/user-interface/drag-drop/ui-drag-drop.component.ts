import {
  CdkDrag,
  CdkDragDrop,
  CdkDragEnd,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  Point,
  transferArrayItem
} from '@angular/cdk/drag-drop';
import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { DasCommonComponentModule } from '../../../common/das-common-component.module';
import { CamelCasePipe } from '../../../common/pipes/camel-case.pipe';

@Component({
  selector: 'das-ui-drag-drop',
  templateUrl: './ui-drag-drop.component.html',
  styleUrls: ['./ui-drag-drop.component.scss'],
  standalone: true,
  imports: [CdkDrag, DasCommonComponentModule, CdkDropListGroup, CdkDropList, NgFor, CamelCasePipe]
})
export class UiDragDropComponent {
  dragAroundPosition: Point = { x: 0, y: 0 };

  dragAroundBoxEnded($event: CdkDragEnd) {
    this.dragAroundPosition = $event.source.getFreeDragPosition();
  }

  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  drop(event: CdkDragDrop<string[]>) {
    console.log('drop');
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
  }
}
