import {
  Directive,
  ElementRef,
  OnInit,
  Renderer2,
  OnDestroy,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appHighlightOnMove]',
})
export class HighlightOnMoveDirective implements OnInit, OnDestroy {
  @HostListener('mouseover', ['$event']) mouseOverHandler(e: MouseEvent){
console.log('mouseover', e);

  }
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  unsubscribeFromEvents: (() => void)[] = [];

  ngOnInit(): void {
    this.unsubscribeFromEvents.push(
      this.renderer.listen(
        this.elRef.nativeElement,
        'mouseenter',
        this.mouseEnterHandler.bind(this)
      )
    );

    this.unsubscribeFromEvents.push(
      this.renderer.listen(
        this.elRef.nativeElement,
        'mouseleave',
        this.mouseLeaveHandler.bind(this)
      )
    );

    // hardcoded
    // this.elRef.nativeElement.style.backgroundColor = 'yellow';

    // using Render2
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'red');
  }

  mouseEnterHandler(e: MouseEvent): void {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow');

    // with css class
    this.renderer.addClass(this.elRef.nativeElement, 'highlight');
  }

  mouseLeaveHandler(e: MouseEvent): void {
    //  this.renderer.removeStyle(this.elRef.nativeElement, 'background-color');

    // with css class
    this.renderer.removeClass(this.elRef.nativeElement, 'highlight');
  }

  ngOnDestroy(): void {
    this.unsubscribeFromEvents.forEach((fn)=> fn());
  }
}
