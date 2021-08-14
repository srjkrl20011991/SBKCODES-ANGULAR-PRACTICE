import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/item';

@Component({
  selector: 'app-directive-practice',
  templateUrl: './directive-practice.component.html',
  styleUrls: ['./directive-practice.component.css'],
})
export class DirectivePracticeComponent implements OnInit {
  isChangeColor: boolean = false;
  borderDiv = { border: '2px solid blue' };
  name: string = 'MyTeaPot';
  constructor() {}

  ngOnInit(): void {}

  toggleColor() {
    this.isChangeColor = !this.isChangeColor;
    this.borderDiv = {
      border: this.isChangeColor ? '2px solid black' : '2px solid blue',
    };
  }

  setUpperCase(par: string) {
    console.log('setUpperCase', par);
    this.name = par.toUpperCase();
  }
}
