import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/app/services/common.service';
import { EmitService } from 'src/app/services/emit.service';
import { QuizService } from 'src/app/services/quiz.service';
import { AlertConfig, ConfirmModelComponent } from 'src/app/shared/components/confirm-model/confirm-model.component';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit, OnDestroy {
  constructor(
    private quizService: QuizService,
    private formBuilder: FormBuilder,
    private commonService: CommonService,
    private emitService: EmitService,
    private router: Router
  ) {}
  public quizForm!: FormGroup;
  public quizData: any[] = [];
  public quizElements: any = [];
  private pageNumber: number = 0;
  public slidePosition: number = 0;

  private subscription!: Subscription;

  @ViewChild('quizBlockElement') quizBlockElement!: ElementRef;

  ngOnInit(): void {
    this.subscription = this.quizService.getQuizQuestions().subscribe((res) => {
      this.quizData = res.data;
      this.buildQuizForm();
    }, (err) => {
      console.log('Res :', err);
    });
  }

  public onQuizSubmit() {
    let data: AlertConfig = {
      closeBtn: 'Close',
      actionBtn: 'Submit',
      header: 'Are you sure, you want to submit?',
      message: 'Click "Submit" to keep submit the form.'
    };
    this.commonService.openModal<ConfirmModelComponent>(
      ConfirmModelComponent,
      { data: data , autoFocus: false, position: { top: 'top' }},
      (value: any) => {
        if (value) {
          const formData = this.quizForm.value;
          const result = this.quizData.every((ele, ind) => {
            return ele.answer === formData.quiz[ind];
          });
          this.commonService.isResultSubmitted(true);
          this.emitService.emitQuizData$.next({result: result});
          this.router.navigate(['/result']);
        } else {
          console.log('No ');
        }
      }
    );
  }

  public onNext() {
    if (this.pageNumber < this.quizData.length-1) {
      this.pageNumber++;
    } else {
      this.pageNumber = 0;
    }
    this.calculatePosition();
  }

  public onPrev() {
    if (this.pageNumber > 0) {
      this.pageNumber--;
    } else {
      this.pageNumber = this.quizData.length-1;
    }
    this.calculatePosition();
  }

  private calculatePosition() {
    this.slidePosition = -(this.quizBlockElement.nativeElement.offsetWidth * this.pageNumber);
  }

  private buildQuizForm(): void {
    const controls = this.quizData.map((quiz, ind) => { return ''; });

    this.quizForm = this.formBuilder.group({
      quiz: this.formBuilder.array(controls)
    });
    this.quizElements = (this.quizForm.get('quiz') as  FormArray).controls;
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
