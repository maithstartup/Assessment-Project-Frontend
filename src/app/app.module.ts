import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './page/login/login.component';
import { AssessmentComponent } from './page/assessment/assessment.component';
import {LoaderComponent} from './component/loader/loader.component';
import {NavBarComponent} from './component/nav-bar/nav-bar.component';
import { IndividualAssessmentComponent } from './page/individual-assessment/individual-assessment.component';
import { CandidateAssessmentComponent } from './page/candidate-assessment/candidate-assessment.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AssessmentComponent,
    LoaderComponent,
    NavBarComponent,
    IndividualAssessmentComponent,
    CandidateAssessmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
