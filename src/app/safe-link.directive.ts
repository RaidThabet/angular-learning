import {Directive, input} from '@angular/core';

// The goal is to warn the user that they are going to leave the page when they click on the link

@Directive({
  selector: "a[appSafeLink]",
  host: {
    "(click)": "onConfirmLeavePage($event)"
  }
})
export class SafeLinkDirective {
  queryParam = input("myapp", {alias: "appSafeLink"});

  constructor() {
    console.log("SafeLInkDirective is active");
  }

  onConfirmLeavePage(event: MouseEvent) {
    const wantsToLeave = window.confirm("Do you want to leave the app?");

    if (wantsToLeave) {
      const address = (event.target as HTMLAnchorElement).href; // The URL the user clicked
      (event.target as HTMLAnchorElement).href = address + `?from=${this.queryParam()}`;
      return;
    }

    event.preventDefault();
  }
}
