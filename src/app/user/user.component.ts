import {Component, computed, EventEmitter, input, Input, output, Output} from '@angular/core';
import {User} from './user.model';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // @Input({required: true}) id!: string;
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;
  @Input({required: true}) user!: User;

  @Input({required: true}) isSelected!: boolean;

  // this EventEmitter object will allow us to emit custom values through
  // that select property to any parent component that's interested
  @Output() select = new EventEmitter<string>(); // the classic way
  // select = output<string>(); // the modern way


  get imagePath() {
    return "assets/users/" + this.user.avatar;
  }

  onSelectUser = () => {
    this.select.emit(this.user.id);
  }
}
