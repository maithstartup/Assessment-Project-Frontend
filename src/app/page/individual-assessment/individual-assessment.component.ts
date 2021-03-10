import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AssessmentService } from '../../service/assessment/assessment.service';
import {
  MatDialog,
  MatDialogRef,
  MatDialogModule,
} from '@angular/material/dialog';
import { Assessment } from 'src/app/model/Assessment';
import { Assignment } from 'src/app/model/Assignment';
import { AssignmentService } from 'src/app/service/assignment/assignment.service';
import { QuizService } from 'src/app/service/quiz/quiz.service';
import { Quiz } from 'src/app/model/Quiz';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavBarComponent } from 'src/app/component/nav-bar/nav-bar.component';
import { ShowAssessmentComponent } from 'src/app/component/show-assessment/show-assessment.component';
import { AddAssignmentComponent } from 'src/app/component/add-assignment/add-assignment.component';

@Component({
  selector: 'app-individual-assessment',
  templateUrl: './individual-assessment.component.html',
  styleUrls: ['./individual-assessment.component.css']
})
export class IndividualAssessmentComponent implements OnInit {
  assessment:Assessment;
  pageLoaded: boolean = false;

  toggle:boolean=true;

  quizBool: boolean = false;
  assignBool: boolean = false;
  projectBool: boolean = false;
  type:string;

  assignment:Partial<Assignment>={}
   quiz:Partial<Quiz>={};
  data = {
    assessmentName:"temp-edited-assesment",

    type:"quiz",

    description:"enriching",

    courseId:1,

    trainerId:2
    }

    updationForm = this.fb.group({
      assessmentName: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });

  constructor(private http: HttpClient,
    private assessmentService: AssessmentService,
    private assignmentService:AssignmentService,
    private quizService: QuizService,
    private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog,) { }
    assessmentId:number
  ngOnInit(): void {
    this.assessmentId=4;
    this.getAssessment();
    
    //this.deleteAssessment();
    //this.updateAssessment();
  }
  getAssessment() {
    console.log(this.assessment);
    this.assessmentService.getAssessmentRequest(this.assessmentId)
      .subscribe(
        (res) => {
          this.assessment = res;
          console.log(this.assessment);
          this.type=this.assessment.type;
          if(this.type == "quiz")
            this.quizBool=true;
          else if(this.type == "assignment")
            this.assignBool = true;
          else if(this.type == "project")
          this.projectBool = true;
          this.pageLoaded = true;

          console.log(this.quizBool)
          console.log(this.assignBool)
          
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
    this.assessment.assessmentName=this.updationForm.value.assessmentName;
    this.assessment.description=this.updationForm.value.description;
    console.log(this.updationForm.value)
    console.log("heyy")
    this.assessmentService.updateAssessmentRequest(this.assessment,this.assessment.assessmentId)
      .subscribe(
        (res) => {
          this.assessment = res;
          console.log(this.assessment);
          this.pageLoaded = true;
          location.reload();
        },
        (err) => {
          console.log(err);
        }
      );
  }
  

  deleteAssessment() {
    console.log("deleting");
    this.assessmentService.deleteAssessmentRequest(this.assessment.assessmentId)
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
      this.router.navigateByUrl('/assessments');
  }

  editAssessment(){
    this.toggle = false;
    this.setDefault()
  }

  setDefault() {
    this.updationForm.setValue({
      assessmentName: this.assessment.assessmentName,
      description: this.assessment.description,
    });
  }

  updatedAssignmentHandler(assignment: Assignment) {
    console.log(assignment);
    this.assignmentService.updateAssignmentRequest(assignment, assignment.assignmentId)
      .subscribe(
        (res) => {
          this.assignment = res;
        },
        (err) => {
          console.log(err);
        }
      );
      this.toggle=true;
      window.location.reload();
  }


  deleteAssignmentHandler(id: number) {
    this.assignmentService.deleteAssignmentRequest(id).subscribe(
      (res) => {
         console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
    location.reload();
  }

  updatedQuizHandler(quiz: Quiz) {
    console.log("updatequiz")
    this.quizService.updateQuizRequest(quiz, quiz.quizId).subscribe(
      (res) => {
        this.quiz = res;
        console.log(quiz);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  removeQuizHandler(id: number) {
    console.log("inside"+id)
    this.quizService.deleteQuizRequest(id).subscribe(
      (res) => {
        this.quiz = res;
      },
      (err) => {
        console.log(err);
      }
    );
    location.reload();
  }

  addAssignemntDialog() {
    console.log("hey me")
    const dialogRef = this.dialog.open(AddAssignmentComponent, {
      width: '600px',
      data: this.assignment,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      console.log(result)
      if (
        result != undefined &&
        result.question &&
        result.answer &&
        result.assignmentScore
      ) {
        this.assignment = result;
        this.assignment.assessmentId =this.assessment.assessmentId

        this.assignmentService.addAssignmentRequest(this.assignment)
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
}