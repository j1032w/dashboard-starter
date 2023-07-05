import { CdkDragDrop, CdkDragEnd, moveItemInArray, Point, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'das-ui-drag-drop',
  templateUrl: './ui-drag-drop.component.html',
  styleUrls: ['./ui-drag-drop.component.scss']
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
