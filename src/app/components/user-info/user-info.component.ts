import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
})
export class UserInfoComponent implements OnInit {
  str: string = `Welcome to angular ${VERSION.major}`;
  myDate = new Date(1992, 2, 5);
  constructor() {}

  ngOnInit(): void {}
}
