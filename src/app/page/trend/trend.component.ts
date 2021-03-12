import { Component, Input, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
import { Assessment } from 'src/app/model/Assessment';
import {CandidateService} from 'src/app/service/candidate/candidate.service'
@Component({
  selector: 'app-trend',
  templateUrl: './trend.component.html',
  styleUrls: ['./trend.component.css']
})
export class TrendComponent implements OnInit {

    data: any;
  
    public doughnutChartLabels: Label[] = [];
  
    public doughnutChartData: MultiDataSet = [[3,6]];
    public doughnutChartType: ChartType = 'pie';
    courseId =2;
    constructor(private candidateService: CandidateService) {}
  
    ngOnInit(): void {

        this.candidateService.getCountByLocationRequest(this.courseId)
        .subscribe(
          (res) => {
             this.data = res;
             console.log("hey")
            console.log(this.data);
            
            this.data.count = this.data.count.map(c => parseInt(c));
            this.doughnutChartData=[this.data.count];
            this.doughnutChartLabels = this.data.location;
            
          },
          (err) => {
            console.log(err);
            
          }
        );

        
    }


}
