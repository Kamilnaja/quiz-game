import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DisplayQuestionComponent } from './display-question/display-question.component';
import { QuestionsService } from 'app/questions.service';
import { AddQuestionComponent } from './add-question/add-question.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DisplaySingleComponent } from './display-single/display-single.component';

const appRoutes: Routes = [
  {path: 'addquestion', component: AddQuestionComponent },
  // todo - zmienić na prawidłową
  {path: 'displayallquestion', component: DisplayQuestionComponent },
  {path: 'displayquestion', component: DisplaySingleComponent},
  {path: '', component: AddQuestionComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DisplayQuestionComponent,
    AddQuestionComponent,
    PageNotFoundComponent,
    DisplaySingleComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    ),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [QuestionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
