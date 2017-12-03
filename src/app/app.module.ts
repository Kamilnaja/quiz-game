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
import { LastQuestionComponent } from './last-question/last-question.component';
import { MainPageComponent } from './main-page/main-page.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';

const appRoutes: Routes = [
  {path: 'addquestion', component: AddQuestionComponent },
  {path: 'displayallquestion', component: DisplayQuestionComponent },
  {path: 'displayquestion', component: DisplaySingleComponent},
  {path: '', component: MainPageComponent },
  {path: 'lastquestion', component: LastQuestionComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    DisplayQuestionComponent,
    AddQuestionComponent,
    PageNotFoundComponent,
    DisplaySingleComponent,
    LastQuestionComponent,
    MainPageComponent,
    HeaderComponent,
    FooterComponent
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
