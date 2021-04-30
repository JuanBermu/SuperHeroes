import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {

  numero = 0;
  onPlus(): void {
    this.numero += 10000;
  }
  onsubtract(): void {
    this.numero -= 10000;
  }
}
