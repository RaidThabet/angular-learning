import {Directive, effect, inject, input, TemplateRef, ViewContainerRef} from '@angular/core';
import {Permission} from './auth.model';
import {AuthService} from './auth.service';

@Directive({
  selector: "[appAuth]"
})
export class AuthDirective {
  userType = input.required<Permission>({alias: "appAuth"});
  private authService = inject(AuthService);
  // gives access to the content of the template
  private templateRef = inject(TemplateRef);
  // gives access to the place in the DOM where this directive is being used
  private viewContainerRef = inject(ViewContainerRef);

  constructor() {
    effect(() => {
      if (this.authService.activePermission() === this.userType()) {
        // console.log("show element");
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      } else {
        // console.log("don't show element");
        this.viewContainerRef.clear();
      }
    });
  }
}
