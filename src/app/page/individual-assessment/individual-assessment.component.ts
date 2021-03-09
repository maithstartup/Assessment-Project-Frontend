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

@Component({
  selector: 'app-individual-assessment',
  templateUrl: './individual-assessment.component.html',
  styleUrls: ['./individual-assessment.component.css']
})
export class IndividualAssessmentComponent implements OnInit {
  assessment:Assessment;
  pageLoaded: boolean = false;

  quizBool: boolean = false;
  assignBool: boolean = false;
  projectBool: boolean = false;
  type:string;

  assignment:Assignment;
  quiz:Quiz;
  data = {
    assessmentName:"temp-edited-assesment",

    type:"quiz",

    description:"enriching",

    courseId:1,

    trainerId:2
    }
  constructor(private http: HttpClient,
    private assessmentService: AssessmentService,
    private assignmentService:AssignmentService,
    private quizService: QuizService) { }
    assessmentId:number
  ngOnInit(): void {
    this.assessmentId=1;
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
    this.quizService.updateQuizRequest(quiz, quiz.quizId).subscribe(
      (res) => {
        this.quiz = res;
      },
      (err) => {
        console.log(err);
      }
    );
    console.log(quiz);
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
}