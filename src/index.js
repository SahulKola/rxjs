import { fromEvent, of, interval } from "rxjs";
import {
  mergeMap,
  switchMap,
  filter,
  reduce,
  take,
  scan,
  tap,
} from "rxjs/operators";

// const subs = fromEvent(document, "keydown").pipe(
//   map(event => event.code),
//   filter(event => event === "Space")
// );
const btn = document.querySelector("#btn");
const subs = fromEvent(btn, "click").pipe(
  switchMap(() => {
    return interval(1000).pipe(
      take(5),
      tap({
        complete() {
          console.log("complete");
        },
      })
    );
  })
);
const observable = subs.subscribe({
  next(value) {
    console.log(value);
  },
});
setInterval(() => {
  observable.unsubscribe();
}, 5000);

// * Subscriber is an object we can communicate with Observers
// * Observable.subscribe creates Observer -> and  Objects passed to it.
