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
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ResultsComponent } from './results/results.component';
import { HttpModule } from '@angular/http';
import { QuestionsService } from 'app/services/questionsService';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { rootReducer, IAppState, INITIAL_STATE } from '../store';
import { CounterActions } from './app.actions';
import { Router } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AuthService } from './services/auth.Service';
import { LoginComponent } from './login/login.component';

export const appRoutes: Routes = [
  { 
    path: 'addquestion', 
    component: AddQuestionComponent,
    canActivate: [AuthGuard],
  },
  { path: 'displayallquestion', component: DisplayAllQuestionsComponent },
  { path: 'displayquestion', component: DisplaySingleComponent },
  { path: '', component: MainPageComponent },
  { path: 'lastquestion', component: LastQuestionComponent },
  { path: 'results', component: ResultsComponent },
  { path: 'login', component: LoginComponent },

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
    ProgressBarComponent,
    LoginComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    BrowserModule,
    FormsModule,
    HttpModule,
    NgReduxModule
  ],
  providers: [QuestionsService, CounterActions, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
    constructor(
      ngRedux: NgRedux<IAppState>,
      private devTools: DevToolsExtension

    ) {
      ngRedux.configureStore(
        rootReducer,
        INITIAL_STATE
      );
    }
}
