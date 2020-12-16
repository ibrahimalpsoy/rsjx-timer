import { Component, VERSION } from "@angular/core";
import { of, timer } from "rxjs";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  subscription;
  constructor() {
    const timerSample = timer(3000, 1000);

    this.subscription = timerSample.subscribe(
      val => {
        console.log(val);
      },
      err => {},
      () => {
        console.log("durdu");
      }
    );
  }
  durdur() {
    this.subscription.unsubscribe();
  }
}
