import {inject, Injectable, signal} from '@angular/core';
import {Task, TaskStatus} from './task.model';
import {LoggingService} from '../logging.service';

@Injectable({
  providedIn: "root"
})
export class TasksService {
  private tasks = signal<Task[]>([]);
  private loggingService = inject(LoggingService);

  allTasks = this.tasks.asReadonly();

  addTAsk(taskData: { title: string; description: string }) {
    const newTask: Task = {
      ...taskData,
      id: Math.random().toString(),
      status: "OPEN"
    }
    this.tasks.update((prev) => [...prev, newTask]);
    this.loggingService.log("ADDED TASK WITH TITLE " + taskData.title);
  }

  updateTasksStatus(taskId: string, newStatus: TaskStatus) {
    this.tasks.update(
      (prev) => prev.map((task) => task.id === taskId ? {...task, status: newStatus} : task)
    );
    this.loggingService.log("CHANGE TASK STATUS TO " + newStatus);
  }
}
