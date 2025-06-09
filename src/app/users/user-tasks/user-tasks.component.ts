import {Component, computed, DestroyRef, inject, input, OnInit} from '@angular/core';
import {UsersService} from '../users.service';
import {ActivatedRoute, RouterLink, RouterOutlet} from '@angular/router';

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
export class UserTasksComponent implements OnInit {
  // The component instance will be re-used.
  // Therefore, ngONInit will NOT be executed again.
  // Hence, a subscription is needed to be notified about changes.

  // userId = input.required<string>(); // will be set by Angular
  userName = "";
  message = input.required<string>();
  private usersService = inject(UsersService);
  private activatedRoute = inject(ActivatedRoute);
  private destroyRef = inject(DestroyRef);

  // userName = computed(
  //   () => this.usersService.users.find(
  //     u => u.id === this.userId()
  //   )?.name
  // );

  ngOnInit() {
    console.log("Input data: ", this.message());
    console.log(this.activatedRoute);
    const subscription = this.activatedRoute.paramMap.subscribe({
      next: paramMap => {
        this.userName = this.usersService.users.find(u => u.id === paramMap.get("userId"))?.name || ""
      }
    });

    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }
}
