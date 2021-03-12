import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Quiz } from 'src/app/model/Quiz';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {

  quizForm = this.fb.group({
    question: ['', [Validators.required]],
    answer: ['', [Validators.required]],
    optionA: ['', [Validators.required]],
    optionB: ['', [Validators.required]],
    optionC: ['', [Validators.required]],
    optionD: ['', [Validators.required]],
    quizScore: ['', [Validators.required]],
  });

  constructor(
    public dialogRef: MatDialogRef<AddQuizComponent>,
    @Inject(MAT_DIALOG_DATA) public quiz: Quiz, private fb: FormBuilder
  ) {}

  ngOnInit(): void {
  }


  addQuiz() {
    if (this.quizForm.valid) {
      console.log(this.quiz)
      console.log(this.quizForm.controls['question'].value)
      this.quiz.question= this.quizForm.controls['question'].value;
      this.quiz.answer = this.quizForm.controls[
        'answer'
      ].value;
      this.quiz.quizScore = this.quizForm.controls[
        'quizScore'
      ].value;
      this.quiz.optionA = this.quizForm.controls[
        'optionA'
      ].value;
      this.quiz.optionB = this.quizForm.controls[
        'optionB'
      ].value;
      this.quiz.optionC = this.quizForm.controls[
        'optionC'
      ].value;
      this.quiz.optionD = this.quizForm.controls[
        'optionD'
      ].value;
  
      console.log(this.quiz)
      // this.updatedQuiz.emit(this.quiz);
      // this.toggle = !this.toggle;
    }
  }

  onNoClick(): void {
    this.dialogRef.close("PIZZA");
  }

}