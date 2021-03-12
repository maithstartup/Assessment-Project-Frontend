import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {Assignment} from './../../model/Assignment';

@Component({
  selector: 'app-show-assignment',
  templateUrl: './show-assignment.component.html',
  styleUrls: ['./show-assignment.component.css']
})
export class ShowAssignmentComponent implements OnInit {

  @Input('assignment')
  assignment: Assignment;
  toggle: boolean = true;
  
  @Output()
  updatedAssignment: EventEmitter<Assignment> = new EventEmitter();
  
  @Output()
  removeItem: EventEmitter<number> = new EventEmitter();
  
  updationForm = this.fb.group({
    question: ['', [Validators.required]],
    answer: ['', [Validators.required]],
    assignmentScore: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  enableEdit() {
    this.toggle = !this.toggle;
    this.setDefault();
  }
  
  setDefault() {
    this.updationForm.setValue({
      question: this.assignment.question,
      answer: this.assignment.answer,
      assignmentScore: this.assignment.assignmentScore,
    });
  }
  
  saveAssignment() {
    if (this.updationForm.valid) {
      this.assignment.question= this.updationForm.controls['question'].value;
      this.assignment.answer = this.updationForm.controls[
        'answer'
      ].value;
      this.assignment.assignmentScore = this.updationForm.controls[
        'assignmentScore'
      ].value;
  
      this.updatedAssignment.emit(this.assignment);
      this.toggle = !this.toggle;
    }
  }
  
  removeAssignment() {
    this.removeItem.emit(this.assignment.assignmentId);
  }
  }




