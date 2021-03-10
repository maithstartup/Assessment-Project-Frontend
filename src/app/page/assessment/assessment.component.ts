import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AssessmentService } from '../../service/assessment/assessment.service';
import {
  MatDialog,
  MatDialogRef,
  MatDialogModule,
} from '@angular/material/dialog';
import { Assessment } from 'src/app/model/Assessment';
import { Router } from '@angular/router';


@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css']
})
export class AssessmentComponent implements OnInit {

  assessmentList:Array<Assessment>;
  pageLoaded: boolean = false;

  constructor(
    private http: HttpClient,
    private assessmentService: AssessmentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAssessment();
  }

  getAssessment() {
    console.log(this.assessmentList);
    this.assessmentService.getAllAssessmentRequest()
      .subscribe(
        (res) => {
          this.assessmentList = res;
          console.log(this.assessmentList);
          this.pageLoaded = true;
        },
        (err) => {
          console.log(err);
        }
      );
  }

  showHandler(id:number){
    console.log(id)
    localStorage.setItem('assessmentId', String(id));
    this.router.navigateByUrl('/individual');
  }

}
