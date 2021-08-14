import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Item } from 'src/app/item';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css'],
})
export class EventBindingComponent {
  @Input() item!: Item;
  displayNone: string = '';
  lineBreak: string = '';
  imageSrc: string =
    'https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg';

  // Build Connection between child to parent
  @Output() deleteRequest = new EventEmitter<Item>();

  delete() {
    this.deleteRequest.emit(this.item);
    this.displayNone = this.displayNone ? '' : 'none';
    this.lineBreak = this.lineBreak ? '' : 'line-through';
  }
}
