import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-show-assessment',
  templateUrl: './show-assessment.component.html',
  styleUrls: ['./show-assessment.component.css']
})
export class ShowAssessmentComponent implements OnInit {

  panelOpenState = false;

  @Input('data')
  data;

  @Input('name')
  name;

  @Output()
  selectedAssessment: EventEmitter<number>;

  constructor() { }

  ngOnInit(): void {
  }

}
