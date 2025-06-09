import {Component, DestroyRef, inject, input, OnInit} from '@angular/core';
import {UsersService} from '../users.service';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterLink,
  RouterOutlet,
  RouterStateSnapshot
} from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
  imports: [
    RouterOutlet,
    RouterLink
  ]
})
export class UserTasksComponent {
  userName = input.required<string>();
  message = input.required<string>();
  private activatedRoute = inject(ActivatedRoute);
  // private destroyRef = inject(DestroyRef);
  //
  // ngOnInit() {
  //   // data holds the merged static and dynamically resolved data
  //   const subscription = this.activatedRoute.data.subscribe({
  //     next: (data) => console.log(data),
  //   });
  //
  //   this.destroyRef.onDestroy(() => subscription.unsubscribe());
  // }
}

// will be re-executed every time the route parameter changes, so we don't have to setup a subscription
export const resolveUserName: ResolveFn<string> = (activatedRoute: ActivatedRouteSnapshot, routerState: RouterStateSnapshot) => {
  const usersService = inject(UsersService);
  const userName = usersService.users.find(u => u.id === activatedRoute.paramMap.get("userId"))?.name || "";
  return userName;
}

export const resolveTitle: ResolveFn<string> = (activatedRoute: ActivatedRouteSnapshot, routerState: RouterStateSnapshot) => {
  return resolveUserName(activatedRoute, routerState) + "\'s tasks";
}
