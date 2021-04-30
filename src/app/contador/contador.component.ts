import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {

  counter = 0;
  onPlus(): void {
    this.counter += 10000;
  }
  onsubtract(): void {
    this.counter -= 10000;
  }
}
