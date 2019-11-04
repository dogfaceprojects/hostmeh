import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  myName: string;
  myLastName: string;

  constructor() {
    this.myName = "frank";
    this.myLastName = "boy";
  }
  onSubmit() {
    alert(this.myName + " " + this.myLastName);
  }
}
