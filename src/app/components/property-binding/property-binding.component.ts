import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css'],
})
export class PropertyBindingComponent {
  imageSrc: string =
    'https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg';

  disableTextBox: boolean = false;

  disabledMyText(): void {
    this.disableTextBox = true;
  }
  classes: string = 'spetial';
  manyClasses: string = 'a b c d e';
}
