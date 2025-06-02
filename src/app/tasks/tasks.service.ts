import {Injectable, signal} from '@angular/core';
import {Task, TaskStatus} from './task.model';

// @Injectable({
//   providedIn: "root"
// })
export class TasksService {
  private tasks = signal<Task[]>([]);

  allTasks = this.tasks.asReadonly();

  addTAsk(taskData: { title: string; description: string }) {
    const newTask: Task = {
      ...taskData,
      id: Math.random().toString(),
      status: "OPEN"
    }
    this.tasks.update((prev) => [...prev, newTask]);
  }

  updateTasksStatus(taskId: string, newStatus: TaskStatus) {
    this.tasks.update(
      (prev) => prev.map((task) => task.id === taskId ? {...task, status: newStatus} : task)
    );
  }
}
