import { Component } from '@angular/core';
import { Hero } from './heros/hero';
import { HeroService } from './heros/hero.service';
import { Item } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'demo';
  currentItem = { name: 'Bird Picture' };
  userData: Hero[];
  constructor(private hero: HeroService) {
    this.userData = [];
  }

  deleteItem(item: Item) {
    alert(`Delete Item ${item.name}`);
  }

  getAllUserDataDetails() {
    this.userData = this.hero.getAllUserData();
  }
}
