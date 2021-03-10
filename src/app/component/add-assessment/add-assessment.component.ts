import { Component, Input, OnInit, EventEmitter, Output, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Assessment } from 'src/app/model/Assessment';
@Component({
  selector: 'app-add-assessment',
  templateUrl: './add-assessment.component.html',
  styleUrls: ['./add-assessment.component.css']
})
export class AddAssessmentComponent implements OnInit {

  assessmentForm = this.fb.group({
    assessmentName: ['', [Validators.required]],
    description: ['', [Validators.required]],
    type: ['', [Validators.required]],
    courseId: ['', [Validators.required]],
    trainerId: ['', [Validators.required]],
  });

  constructor(
    public dialogRef: MatDialogRef<AddAssessmentComponent>,
    @Inject(MAT_DIALOG_DATA) public assessment: Assessment, private fb: FormBuilder
  ) {}

  ngOnInit(): void {
  }


  addAssessment() {
    if (this.assessmentForm.valid) {
      console.log(this.assessment)
      console.log(this.assessmentForm.controls['assessmentName'].value)
      this.assessment.assessmentName= this.assessmentForm.controls['assessmentName'].value;
      this.assessment.description = this.assessmentForm.controls[
        'description'
      ].value;
      this.assessment.type = this.assessmentForm.controls[
        'type'
      ].value;
      this.assessment.courseId= this.assessmentForm.controls['courseId'].value;
      this.assessment.trainerId= this.assessmentForm.controls['trainerId'].value;
  
      console.log(this.assessment)
      // this.updatedAssessment.emit(this.assessment);
      // this.toggle = !this.toggle;
    }
  }

  onNoClick(): void {
    this.dialogRef.close("PIZZA");
  }

}

