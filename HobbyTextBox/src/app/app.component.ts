import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  hobby = '';

  ngOnInit() {
    console.log(`ngOnInit(): ${this.hobby}`);
  }

  yourHobbeis() {
    console.log(`yourHobbeis: ${this.hobby}`);
  }
}
