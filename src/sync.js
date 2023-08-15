import { Observable } from "rxjs";

const observable = new Observable(subscriber => {
  subscriber.next("Hello World");
  subscriber.error("Error!");

  subscriber.complete();
  subscriber.next("Hello");
});

observable.subscribe({
  next: value => {
    console.log(value);
  },
  complete: () => {
    console.log("Completed");
  },
  errr: err => console.log(err),
});

// * Subscriber is an object we can communicate with Observers
// * Observable.subscribe creates Observer -> and  Objects passed to it.
