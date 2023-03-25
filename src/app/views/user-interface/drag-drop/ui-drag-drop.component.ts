import { CdkDragDrop, CdkDragEnd, moveItemInArray, Point, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'das-ui-drag-drop',
  templateUrl: './ui-drag-drop.component.html',
  styleUrls: ['./ui-drag-drop.component.scss']
})
export class UiDragDropComponent {
  todoItems:number[] = [3, 4, 5, 6, 7];
  doneItems:number[] = [1, 2,];

  dragAroundPosition: Point = { x: 0, y: 0 };

  dragAroundBoxEnded($event: CdkDragEnd) {
    this.dragAroundPosition = $event.source.getFreeDragPosition();
  }

  dropped($event: CdkDragDrop<number[]>){
    if ($event.previousContainer === $event.container) {
      moveItemInArray($event.container.data, $event.previousIndex, $event.currentIndex);
    } else {
      transferArrayItem(
        $event.previousContainer.data,
        $event.container.data,
        $event.previousIndex,
        $event.currentIndex,
      );
    }
  }

}
