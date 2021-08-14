import { Component } from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'demo';
  currentItem = { name: 'Bird Picture' };

  deleteItem(item: Item) {
    alert(`Delete Item ${item.name}`);
  }
}
