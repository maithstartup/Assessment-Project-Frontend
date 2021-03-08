import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AssessmentService } from '../../service/assessment/assessment.service';
import {
  MatDialog,
  MatDialogRef,
  MatDialogModule,
} from '@angular/material/dialog';
import { Assessment } from 'src/app/model/Assessment';

@Component({
  selector: 'app-individual-assessment',
  templateUrl: './individual-assessment.component.html',
  styleUrls: ['./individual-assessment.component.css']
})
export class IndividualAssessmentComponent implements OnInit {
  assessment:Assessment;
  pageLoaded: boolean = false;
  data = {
    assessmentName:"temp-edited-assesment",

    type:"quiz",

    description:"enriching",

    courseId:1,

    trainerId:2
    }
  constructor(private http: HttpClient,
    private assessmentService: AssessmentService,) { }
    assessmentId:number
  ngOnInit(): void {
    this.assessmentId=12
    //this.getAssessment();
    //this.deleteAssessment();
    //this.updateAssessment();
    

  }
  getAssessment() {
    console.log(this.assessment);
    this.assessmentService.getAssessmentRequest(12)
      .subscribe(
        (res) => {
          this.assessment = res;
          console.log(this.assessment);
          this.pageLoaded = true;
        },
        (err) => {
          console.log(err);
        }
      );
  }

  addAssessment() {
    console.log(this.assessment);
    this.assessmentService.addAssessmentRequest(this.data)
      .subscribe(
        (res) => {
          this.assessment = res;
          console.log(this.assessment);
          this.pageLoaded = true;
        },
        (err) => {
          console.log(err);
        }
      );
  }

  updateAssessment() {
    this.assessmentService.updateAssessmentRequest(this.data,16)
      .subscribe(
        (res) => {
          this.assessment = res;
          console.log(this.assessment);
          this.pageLoaded = true;
        },
        (err) => {
          console.log(err);
        }
      );
  }
  

  deleteAssessment() {
    console.log("deleting");
    this.assessmentService.deleteAssessmentRequest(12)
      .subscribe(
        (res) => {
          this.assessment = res;
          console.log(this.assessment);
          this.pageLoaded = true;
        },
        (err) => {
          console.log(err);
        }
      );
  }
}