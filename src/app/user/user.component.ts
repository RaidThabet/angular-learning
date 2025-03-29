import {Component, computed, input, Input} from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;

  // avatar = input<string>("");
  // input signals are read-only inside the component class
  avatar = input.required<string>(); // no initial value is needed
  name = input.required<string>();
  imagePath = computed<string>(() => "assets/users/" + this.avatar());


  // get imagePath() {
  //   return "assets/users/" + this.avatar;
  // }

  onSelectUser = () => {
  }
}
