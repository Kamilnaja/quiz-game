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

const appRoutes: Routes = [
  {path: 'addquestion', component: AddQuestionComponent },
  // todo - zmienić na prawidłową
  {path: 'displayquestion', component: DisplayQuestionComponent },
  // {path: '', component: DisplayQuestionComponent },
  {path: '', component: AddQuestionComponent }
  // {path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DisplayQuestionComponent,
    AddQuestionComponent,
    PageNotFoundComponent
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
