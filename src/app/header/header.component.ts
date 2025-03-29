import {Component} from '@angular/core';

@Component({
  selector: "app-header",
  standalone: true, // not needed for Angular 19+
  templateUrl: "header.component.html",
  styleUrl: "header.component.css",
  // styles: "h1 {color: #b700ff}"
})
export class HeaderComponent{}
