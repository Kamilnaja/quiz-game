import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DisplayQuestionComponent } from './display-question/display-question.component';
import { QuestionsService } from 'app/questions.service';

@NgModule({
  declarations: [
    AppComponent,
    DisplayQuestionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [QuestionsService],
  bootstrap: [AppComponent, DisplayQuestionComponent]
})
export class AppModule { }
