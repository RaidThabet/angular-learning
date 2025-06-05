import {Component, computed, DestroyRef, effect, inject, OnInit, signal} from '@angular/core';
import {interval, map, Observable} from 'rxjs';
import {toObservable, toSignal} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  clickCount = signal(0);
  clickCount$ = toObservable(this.clickCount);
  interval$ = interval(1000); // Observables don't necessarily have initial values, but Subjects can
  intervalSignal = toSignal(this.interval$, {initialValue: 0});
  // interval = signal(0);
  // doubleInterval = computed(() => this.interval() * 2);
  customInterval$ = new Observable((subscriber) => {
    let timesExecuted = 0;

    const interval = setInterval(() => {
      if (timesExecuted > 5) {
        clearInterval(interval);
        subscriber.complete();
        return;
      }
      console.log("Emitting new value...");
      subscriber.next({message: "New value"});
      timesExecuted++;
    }, 1000);
  });
  private destroyRef = inject(DestroyRef);

  constructor() {
    // effect(() => {
    //   console.log(`Clicked button ${this.clickCount()} times`)
    // });
    // toObservable(this.clickCount); // should be put where dependency injection also works
  }

  ngOnInit(): void {
    // setInterval(() => {
    //   this.interval.update(prev => prev + 1);}, 1000);

    // const subscription =
    //   interval(1000)
    //     .pipe(
    //       map((val) => val * 2),
    //     //   ... other operators
    //     )
    //     .subscribe({
    //       next: (val) => console.log(val),
    //       // complete: () => {},
    //       // error: (err) => {}
    //     });
    //
    // this.destroyRef.onDestroy(() => {
    //   subscription.unsubscribe();
    // })
    this.customInterval$.subscribe({
      next: (val) => console.log(val),
      complete: () => console.log("COMPLETED!")
    });
    const subscription = this.clickCount$.subscribe({
      next: (val) => console.log(`Clicked button ${val} times`),
    })
    this.destroyRef.onDestroy(() => {
        subscription.unsubscribe();
      })
  }

  onClick() {
    this.clickCount.update(prev => prev + 1);
  }
}
