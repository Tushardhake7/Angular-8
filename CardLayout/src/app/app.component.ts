import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  product = [];
  productOutput = [];

constructor() {
  this.product = [
      { id:1, company:'Onida', product:'TV', Description : 'This is Onida TV... ' },
      { id:2, company:'iphone', product:'Mobile', Description : 'This is iphone 11 pro.. ' },
      { id:3, company:'Dell', product:'Laptop', Description : 'This is Dell laptop... ' }
  ]
}

getData(data) {
 this.productOutput = this.product.filter( s => s.product === data.product);
}
}