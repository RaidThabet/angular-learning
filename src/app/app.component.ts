import {Component} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {UserComponent} from './user/user.component';
import {DUMMY_USERS} from "../utils/dummy-users";
import {TasksComponent} from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: false,
  // imports: [
  //   HeaderComponent,
  //   UserComponent,
  //   TasksComponent
  // ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;

  selectedUserId?: string;

  get userName() {
    return this.users.find(user => user.id === this.selectedUserId)?.name ?? "";
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}
