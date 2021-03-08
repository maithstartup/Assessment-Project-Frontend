import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import {LoginComponent} from './page/login/login.component';
import {AssessmentComponent} from './page/assessment/assessment.component'
import {IndividualAssessmentComponent} from './page/individual-assessment/individual-assessment.component'
import {CandidateAssessmentComponent} from './page/candidate-assessment/candidate-assessment.component'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'assessments', component: AssessmentComponent },
  { path: 'individual', component: IndividualAssessmentComponent },
  { path: 'score', component: CandidateAssessmentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
