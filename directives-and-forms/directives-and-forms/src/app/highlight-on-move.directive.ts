import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightOnMove]',
})
export class HighlightOnMoveDirective implements OnInit {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    console.log(this.elRef);

    // Hard-codded
    // this.elRef.nativeElement.style.backgroundColor = 'yellow';

    // Using Renderer2
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'red'
    // );
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
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'yellow'
    // );
    this.renderer.addClass(this.elRef.nativeElement, 'highlight')
  }

  mouseLeaveHandler(e: MouseEvent): void {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'white'
    // );
    this.renderer.removeClass(this.elRef.nativeElement, 'highlight')
  }
}
