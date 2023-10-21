import {
  Directive,
  Input,
  OnChanges,
  Optional,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appMyStructural]',
  exportAs: 'appMyStructural',
})
export class MyStructuralDirective implements OnChanges {
  @Input() appMyStructural: boolean = false;
  @Input() myTmpProp: any;
  constructor(
   @Optional() private tempalateRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) {
    console.log('---------');
    console.log('templateRef', this.tempalateRef);
    console.log('myTmpProp', this.myTmpProp);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const template = this.tempalateRef || this.myTmpProp
    if(!template){
      return
    }

    if (this.appMyStructural) {
      this.vcRef.createEmbeddedView(template, {
        value: 'value from ngOnChanges 123',
        $implicit: 'this is imlicit data',
      });
    } else {
      this.vcRef.clear();
    }
  }
}
