import {Routes} from '@angular/router';
import {NoTaskComponent} from './tasks/no-task/no-task.component';
import {resolveTitle, resolveUserName, UserTasksComponent} from './users/user-tasks/user-tasks.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {usersRoutes} from './users/users.routes';

export const routes: Routes = [
  {
    path: "",
    component: NoTaskComponent,
    title: "No task selected"
  },
  {
    path: "users/:userId",
    component: UserTasksComponent,
    children: usersRoutes,
    data: {
      message: "hello"
    },
    resolve: {
      userName: resolveUserName
    },
    title: resolveTitle
  },
  {
    path: "**",
    component: NotFoundComponent
  }
]
