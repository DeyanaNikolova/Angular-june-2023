import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { Observable } from 'rxjs';
import { map } from 'rxjs';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


  // Promise Demo
  const p = new Promise(resolve => {
    resolve(100);
  });

  p.then(data=>{
    console.log(data);
  });

  const o$ = new Observable<number>((obs)=>{
    obs.next(1000);
    obs.next(2000);
    obs.next(3000);

    obs.error(new Error('bad error'));

    return ()=>{
      // cleanup
    }
  });

o$.pipe(map((num: number) => num + 1)).subscribe({
  next: console.log,
  error: (err)=> console.error(`Error: ${err}`),
  complete: ()=>console.log('Obs completed!')
})