import { Injectable } from '@angular/core';
import { HEROES } from './mocks-hero';
export class User {
  constructor(public name: string, public isFlag: any = false) {}
}

const alice = new User('Alice', true);
const bob = new User('bob', false);

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  user = bob;
  constructor() {}

  getUser() {
    return (this.user = this.user === bob ? alice : bob);
  }

  getAllUserData() {
    return HEROES;
  }
}
