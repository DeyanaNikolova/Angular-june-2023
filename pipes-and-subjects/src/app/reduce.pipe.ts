import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reduce',
  // pure: false -> not pure functions will re-render
  // pure: true -> pure functions will be memoized - DEFAULT
})
export class ReducePipe<T> implements PipeTransform {
  transform(
    array: T[],
    reduceFn: (acc: any, current: T) => any,
    initialValue: T
  ): unknown {
    // const sum = (acc, curr)=> acc + curr;
    // [1, 2, 3].reduce(sum, 0)
    console.log('Invoked from ReducePipe');
    
    return array.reduce(reduceFn, initialValue);
  }
}
