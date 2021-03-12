import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {CandidateAssessmentService} from '../../service/candidate-assessment/candidate-assessment.service'
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-candidate-assessment',
  templateUrl: './candidate-assessment.component.html',
  styleUrls: ['./candidate-assessment.component.css']
})
export class CandidateAssessmentComponent implements OnInit {
  out:any
  data={
    candidateId:1,
    assessmentId:16,
    score:48
  }
  profileForm: FormGroup;
  constructor(private http: HttpClient,
  private candidateAssessmentService:CandidateAssessmentService,
  private fb: FormBuilder) { }

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      candidateId: [''],
      assessmentId: [''],
      score:['']
    });
  }

  updateProfile(){
    console.log(this.profileForm.value)
  }

  addCandidateAssessment(){

    //console.log(this.assessmentList);
    this.candidateAssessmentService.addScoreRequest(this.profileForm.value)
      .subscribe(
        (res) => {
           this.out = "added";
          console.log(this.out);
        },
        (err) => {
          console.log(err);
        }
      );
  }


  }
