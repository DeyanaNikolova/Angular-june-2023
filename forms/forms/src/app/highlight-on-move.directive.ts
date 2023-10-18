import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightOnMove]',
})
export class HighlightOnMoveDirective implements OnInit {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    console.log(this.elRef);
    // hardcoded
    // this.elRef.nativeElement.style.backgroundColor = 'yellow';

    // using Render2
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'red');

    this.renderer.listen(
      this.elRef.nativeElement,
      'mouseenter',
      this.mouseEnterHandler.bind(this)
    );

    this.renderer.listen(
      this.elRef.nativeElement,
      'mouseleave',
      this.mouseLeaveHandler.bind(this)
    );
  }

  mouseEnterHandler(e: MouseEvent): void {
   // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow');
    
   // with css class
   this.renderer.addClass(this.elRef.nativeElement,
      'highlight');
  }

  mouseLeaveHandler(e: MouseEvent): void {
   //  this.renderer.removeStyle(this.elRef.nativeElement, 'background-color');
  
  // with css class
   this.renderer.removeClass(this.elRef.nativeElement,
    'highlight');
  }
}
