import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { QuizComponent } from './pages/quiz/quiz.component';
import { HeaderComponent } from './components/header/header.component';
import { QuizDirective } from './directives/quiz.directive';
import { QuizQuestionDirective } from './directives/quiz-question.directive';
import { QuizBlockDirective } from './directives/quiz-block.directive';
import { SharedModule } from './shared/shared.module';
import { AppAngularMaterialModule } from './angular-material-module/angular-material-modules';
import { ResultComponent } from './pages/result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuizComponent,
    HeaderComponent,
    QuizDirective,
    QuizQuestionDirective,
    QuizBlockDirective,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    AppAngularMaterialModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
