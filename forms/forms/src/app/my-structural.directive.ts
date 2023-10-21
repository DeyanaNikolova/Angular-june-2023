import {
  Directive,
  Input,
  Optional,
  OnChanges,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appMyStructural]',
})
export class MyStructuralDirective implements OnChanges {
  @Input() appMyStructural: boolean = false;
  constructor(
    @Optional() private tempalateRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if(this.appMyStructural){
      this.vcRef.createEmbeddedView(this.tempalateRef, {
        value: 'value from ngOnChanges 123',
        $implicit: 'this is imlicit data',
      });
    }else{
this.vcRef.clear();
    }
  }
}
