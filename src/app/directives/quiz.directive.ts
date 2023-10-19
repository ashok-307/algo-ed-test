import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[quizQuestions]'
})
export class QuizDirective {

  constructor(
    private elementRef: ElementRef
  ) { }

  @Input() set quizQuestions(width: number) {
    this.elementRef.nativeElement.style.width = width + 'px';
    const t = setTimeout(() => {
      this.elementRef.nativeElement.style.transition =  'all 0.5s ease-in-out';
      clearTimeout(t);
    }, 100);
  }

}
