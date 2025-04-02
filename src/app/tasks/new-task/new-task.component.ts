import {Component, EventEmitter, Output, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NewTaskData} from '../task/task.model';

@Component({
  selector: 'app-new-task',
  imports: [
    FormsModule
  ],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>(); // void means no data will be emitted
  @Output() add = new EventEmitter<NewTaskData>();
  enteredTitle: string = "";
  enteredSummary: string = "";
  enteredDate: string = "";

  // enteredTitle= signal("");   |
  // enteredSummary= signal("");  } no need to change anything in the template if we use signals
  // enteredDate= signal("");    |

  onCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    this.add.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDate
    });
  }
}
