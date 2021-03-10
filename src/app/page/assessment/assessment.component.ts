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
import { AddAssessmentComponent } from 'src/app/component/add-assessment/add-assessment.component';


@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css']
})
export class AssessmentComponent implements OnInit {

  assessmentList:Array<Assessment>;
  pageLoaded: boolean = false;
  assessment:Partial<Assessment>={}

  constructor(
    private http: HttpClient,
    private assessmentService: AssessmentService,
    private router: Router,
    private dialog: MatDialog
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

  addAssignemntDialog() {
    console.log("hey me")
    const dialogRef = this.dialog.open(AddAssessmentComponent, {
      width: '600px',
      data: this.assessment
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      console.log(result)
      if (
        result != undefined &&
        result.type &&
        result.assessmentName &&
        result.description
      ) {
        this.assessment = result;

        this.assessmentService.addAssessmentRequest(this.assessment)
          .subscribe(
            (res) => {
              console.log(res);
            },
            (err) => {
              console.log(err);
            }
          );
          location.reload();
      } else {
        console.log("cannot");
      }
    });
  }

  showHandler(id:number){
    console.log(id)
    localStorage.setItem('assessmentId', String(id));
    this.router.navigateByUrl('/individual');
  }

}
