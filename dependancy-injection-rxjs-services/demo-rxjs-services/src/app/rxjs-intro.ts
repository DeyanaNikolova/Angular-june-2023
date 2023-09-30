import { Observable, map, interval } from 'rxjs';

//function interval(intervalValue: number) {
//   return new Observable<number>(observer => {
//     // observer.next(1000);
//     // observer.next(2000);
//     // observer.next(3000);
//    let counter = 0;

//      const timer = setInterval(()=>{
//    observer.next(counter++);
//    observer.complete();
//     }, intervalValue);
  
  
//     // this code is invoked on destroy
//     return ()=>{
//       clearInterval(timer);
//       observer.unsubscribe();
//     };
//   });
// }


// const stream$ = interval(4000).subscribe(data =>{
// console.log('data from observer: ', data);
// });

const stream$ = interval(3000)
.pipe(map((x) => x * 2))  // transform, filter, accumulate, map,
.subscribe({
  next: x => console.log('data', x),
  error: (err)=> console.error(`Error occured: ${err}!`),
  complete: ()=> console.log('stream has been completed!'),
});



// setTimeout(() => {
//   stream$.subscribe({
//     next: x => console.log('data', x),
//     error: (err)=> console.error(`Error occured: ${err}!`),
//     complete: ()=> console.log('stream has been completed!'),
//   });
// }, 3000);