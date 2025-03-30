import {Component, computed, EventEmitter, input, Input, output, Output} from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) id!: string;
  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;

  // this EventEmitter object will allow us to emit custom values through
  // that select property to any parent component that's interested
  @Output() select = new EventEmitter<string>(); // the classic way
  // select = output<string>(); // the modern way


  get imagePath() {
    return "assets/users/" + this.avatar;
  }

  onSelectUser = () => {
    this.select.emit(this.id);
  }
}
