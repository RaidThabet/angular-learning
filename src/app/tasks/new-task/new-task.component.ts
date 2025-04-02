import {Component, EventEmitter, inject, Input, Output, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NewTaskData} from '../task/task.model';
import {TasksService} from '../tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [
    FormsModule
  ],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required: true}) userId!: string;
  @Output() close = new EventEmitter<void>(); // void means no data will be emitted
  enteredTitle: string = "";
  enteredSummary: string = "";
  enteredDate: string = "";

  private tasksService = inject(TasksService); // alternative to the constructor-based approach

  // enteredTitle= signal("");   |
  // enteredSummary= signal("");  } no need to change anything in the template if we use signals
  // enteredDate= signal("");    |

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDate
    }, this.userId);
    this.close.emit();
  }
}
