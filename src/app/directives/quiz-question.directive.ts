import { Directive, ElementRef, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[quizQuestion]'
})
export class QuizQuestionDirective {

  constructor(
    private elementRef: ElementRef
  ) { }

  @Input() set quizQuestion(width: number) {
    this.elementRef.nativeElement.style.width = (width) + 'px';
  }

}
