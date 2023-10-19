import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[quizBlock]'
})
export class QuizBlockDirective {

  constructor(
    private elementRef: ElementRef
  ) { }

  @Input() set quizBlock(count: number) {
    this.setWidth();
  }

  @HostListener('window:resize') onScroll() {
    this.setWidth();
  }

  private setWidth() {
    const block = this.elementRef.nativeElement;
    const wW = window.innerWidth;
    block.style.width = (wW-1) + 'px';
  }

}
