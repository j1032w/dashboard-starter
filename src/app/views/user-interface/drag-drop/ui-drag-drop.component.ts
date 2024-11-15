import { CdkDragDrop, CdkDragEnd, moveItemInArray, Point, transferArrayItem, CdkDrag, CdkDropListGroup, CdkDropList } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { FeatherModule } from 'angular-feather';
import { NgFor } from '@angular/common';
import { CamelCasePipe } from '../../../common/pipes/camel-case.pipe';

@Component({
    selector: 'das-ui-drag-drop',
    templateUrl: './ui-drag-drop.component.html',
    styleUrls: ['./ui-drag-drop.component.scss'],
    standalone: true,
    imports: [CdkDrag, FeatherModule, CdkDropListGroup, CdkDropList, NgFor, CamelCasePipe]
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
