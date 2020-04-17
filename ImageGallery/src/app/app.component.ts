import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  ImageList = [];

constructor() {
  this.ImageList = [
    { id : 101, category : "forest", img :"https://homepages.cae.wisc.edu/~ece533/images/airplane.png"},
    { id : 103, category : "village", img :"https://homepages.cae.wisc.edu/~ece533/images/baboon.png"},
    { id : 104, category : "forest", img :"https://homepages.cae.wisc.edu/~ece533/images/cat.png"},
    { id : 105, category : "house", img :"https://homepages.cae.wisc.edu/~ece533/images/fruits.png"},
    { id : 106, category : "forest", img :"https://homepages.cae.wisc.edu/~ece533/images/peppers.png"},
    { id : 107, category : "house", img :"https://homepages.cae.wisc.edu/~ece533/images/pool.png"},
    ]; 
}
}