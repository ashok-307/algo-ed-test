import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(
    private http: HttpClient
  ) { }

  public getQuizQuestions(): Observable<any> {
    return this.http.get('assets/quiz.data.json');
  }
}
