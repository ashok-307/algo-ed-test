import { Component, OnInit } from '@angular/core';
import { EmitService } from 'src/app/services/emit.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit{
  constructor(
    private emitService: EmitService
  ) {}

  public result: boolean = false;

  ngOnInit(): void {
    this.emitService.getQuizData().subscribe((res) => {
      this.result = false;
      this.result = res.result;
      console.log('Data :', this.result);
    }, () => {});
  }
}
