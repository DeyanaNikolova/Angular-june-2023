import { Directive, Input, OnChanges, Optional, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMyStructural]',
  exportAs: 'appMyStructural'
})
export class MyStructuralDirective implements OnChanges{
@Input() appMyStructural: boolean = false;
@Input() myTmpProp: any;

  constructor(@Optional() private templateRef: TemplateRef<any>,
    private vcRef: ViewContainerRef) { }

ngOnChanges(changes: SimpleChanges): void {
  const template = this.templateRef || this.myTmpProp;
  if(!template){
    return;
  }
  if(this.appMyStructural){
    this.vcRef.createEmbeddedView(template, {
      value: 'value from NgOnChanges 123',
      $implicit: 'this is implicit data'
    });
  }else{
    this.vcRef.clear();
  }
}
}
