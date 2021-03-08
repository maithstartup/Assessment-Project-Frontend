import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CandidateAssessmentService {

  addScoreUrl = '/api/assessment/score/';

  constructor(private http: HttpClient) { }

  addScoreRequest(data: any): Observable<any> {
    console.log(data)
    return this.http.post<any>(this.addScoreUrl, data);
  }
}
