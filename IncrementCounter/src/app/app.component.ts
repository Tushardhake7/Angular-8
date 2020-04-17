import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  inputNumber: number = 0;

  incrementNumber(): void {
    this.inputNumber += 1;
  }

  decrementNumber(): void {
    this.inputNumber -= 1;
  }

  resetNumber(): void {
    this.inputNumber = 0;
  }
}
