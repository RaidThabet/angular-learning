import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {interval, map} from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    const subscription =
      interval(1000)
        .pipe(
          map((val) => val * 2),
        //   ... other operators
        )
        .subscribe({
          next: (val) => console.log(val),
          // complete: () => {},
          // error: (err) => {}
        });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    })
  }

}
