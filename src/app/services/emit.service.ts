import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmitService {

  public emitQuizData$: BehaviorSubject<any> = new BehaviorSubject({});

  constructor() { }

  public getQuizData(): Observable<any> {
    return this.emitQuizData$.asObservable();
  }
}
