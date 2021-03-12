import { Component, Input, OnInit, EventEmitter, Output, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Assignment} from 'src/app/model/Assignment'

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent implements OnInit {
 

  assignmentForm = this.fb.group({
    question: ['', [Validators.required]],
    answer: ['', [Validators.required]],
    assignmentScore: ['', [Validators.required]],
  });

  constructor(
    public dialogRef: MatDialogRef<AddAssignmentComponent>,
    @Inject(MAT_DIALOG_DATA) public assignment: Assignment, private fb: FormBuilder
  ) {}

  ngOnInit(): void {
  }


  addAssignment() {
    if (this.assignmentForm.valid) {
      console.log(this.assignment)
      console.log(this.assignmentForm.controls['question'].value)
      this.assignment.question= this.assignmentForm.controls['question'].value;
      this.assignment.answer = this.assignmentForm.controls[
        'answer'
      ].value;
      this.assignment.assignmentScore = this.assignmentForm.controls[
        'assignmentScore'
      ].value;
  
      console.log(this.assignment)
      // this.updatedAssignment.emit(this.assignment);
      // this.toggle = !this.toggle;
    }
  }

  onNoClick(): void {
    this.dialogRef.close("PIZZA");
  }

}
