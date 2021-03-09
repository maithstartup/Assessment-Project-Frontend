import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-show-quiz',
  templateUrl: './show-quiz.component.html',
  styleUrls: ['./show-quiz.component.css']
})
export class ShowQuizComponent implements OnInit {

  toggle: boolean = true;

  @Input('quiz')
  quiz: any;

  @Output()
  updatedQuiz: EventEmitter<any> = new EventEmitter();

  @Output()
  removeItem: EventEmitter<number> = new EventEmitter();

  updationForm = this.fb.group({
    question: ['', [Validators.required]],
    optionA: ['', [Validators.required]],
    optionB: ['', [Validators.required]],
    optionC: ['', [Validators.required]],
    optionD: ['', [Validators.required]],
    answer: ['', [Validators.required]],
    score: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  setDefault() {
    this.updationForm.setValue({
      question: this.quiz.question,
      optionA: this.quiz.optionA,
      optionB: this.quiz.optionB,
      optionC: this.quiz.optionC,
      optionD: this.quiz.optionD,
      answer: this.quiz.answer,
      score: this.quiz.score,
    });
  }
  enableEdit() {
    this.toggle = !this.toggle;
    this.setDefault();
  }

  saveQuiz() {
    if (this.updationForm.valid) {
      console.log(this.quiz);

      this.quiz.question = this.updationForm.controls['question'].value;
      this.quiz.optionA = this.updationForm.controls['optionA'].value;
      this.quiz.optionB = this.updationForm.controls['optionB'].value;
      this.quiz.optionC = this.updationForm.controls['optionC'].value;
      this.quiz.optionD = this.updationForm.controls['optionD'].value;
      this.quiz.answer = this.updationForm.controls['answer'].value;
      this.quiz.score = this.updationForm.controls['score'].value;

      this.updatedQuiz.emit(this.quiz);
      this.toggle = !this.toggle;
    }
  }

  removeQuiz() {
    console.log("deleting quiz")
    this.removeItem.emit(this.quiz.quizId);
  }
}

