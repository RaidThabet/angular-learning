import {Directive} from '@angular/core';

// The goal is to warn the user that they are going to leave the page when they click on the link

@Directive({
  selector: "a[appSafeLink]",
  host: {
    "(click)": "onConfirmLeavePage($event)"
  }
})
export class SafeLinkDirective {
  constructor() {
    console.log("SafeLInkDirective is active");
  }

  onConfirmLeavePage(event: MouseEvent) {
    const wantsToLeave = window.confirm("Do you want to leave the app?");

    if (wantsToLeave) {
      return;
    }

    event.preventDefault();
  }
}
