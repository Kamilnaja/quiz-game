import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DisplayAllQuestionsComponent } from './displayAllQuestions/displayAllQuestionsComponent';
import { AddQuestionComponent } from './add-question/add-question.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DisplaySingleComponent } from './display-single/display-single.component';
import { LastQuestionComponent } from './last-question/last-question.component';
import { MainPageComponent } from './main-page/main-page.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {ResultsComponent} from './results/results.component';
import {HttpModule} from '@angular/http';
import { DataService } from 'app/services/dataService';
import { QuestionsService } from 'app/services/questionsService';

const appRoutes: Routes = [
  {path: 'addquestion', component: AddQuestionComponent },
  {path: 'displayallquestion', component: DisplayAllQuestionsComponent },
  {path: 'displayquestion', component: DisplaySingleComponent},
  {path: '', component: MainPageComponent },
  {path: 'lastquestion', component: LastQuestionComponent},
  {path: 'results', component: ResultsComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    DisplayAllQuestionsComponent,
    AddQuestionComponent,
    PageNotFoundComponent,
    DisplaySingleComponent,
    LastQuestionComponent,
    MainPageComponent,
    HeaderComponent,
    FooterComponent,
    ResultsComponent,
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
  providers: [DataService, QuestionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
