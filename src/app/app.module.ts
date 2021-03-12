import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from './app-material/app-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './page/login/login.component';
import { AssessmentComponent } from './page/assessment/assessment.component';
import {LoaderComponent} from './component/loader/loader.component';
import {NavBarComponent} from './component/nav-bar/nav-bar.component';
import { IndividualAssessmentComponent } from './page/individual-assessment/individual-assessment.component';
import { CandidateAssessmentComponent } from './page/candidate-assessment/candidate-assessment.component';
import { TrainingMaterialComponent } from './page/training-material/training-material.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShowAssessmentComponent } from './component/show-assessment/show-assessment.component';
import { ShowQuizComponent } from './component/show-quiz/show-quiz.component';
import { ShowAssignmentComponent } from './component/show-assignment/show-assignment.component';
import { AddAssignmentComponent } from './component/add-assignment/add-assignment.component';
import { AddAssessmentComponent } from './component/add-assessment/add-assessment.component';
import { AddQuizComponent } from './component/add-quiz/add-quiz.component';
import { TrendComponent } from './page/trend/trend.component';
import {Chart} from 'node_modules/chart.js'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AssessmentComponent,
    LoaderComponent,
    NavBarComponent,
    IndividualAssessmentComponent,
    CandidateAssessmentComponent,
    TrainingMaterialComponent,
    ShowAssessmentComponent,
    ShowQuizComponent,
    ShowAssignmentComponent,
    AddAssignmentComponent,
    AddAssessmentComponent,
    AddQuizComponent,
    TrendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
