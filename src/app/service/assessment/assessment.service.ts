import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AssessmentService {

addAssessmentUrl = '/api/assessment/';
getAssessmentByIdUrl = 'api/assessment/id/';
updateAssessmentByIdUrl = 'api/assessment/id/';
getAssessmentAllUrl = '/api/assessment/all'
deleteAssessmentByIdUrl = 'api/assessment/id/';
  constructor(private http: HttpClient) { }

  addAssessmentRequest(data: any): Observable<any> {
    return this.http.post<any>(this.addAssessmentUrl, data);
  }

  getAssessmentRequest(data: number): Observable<any> {
    return this.http.get<any>(this.getAssessmentByIdUrl + data);
  }

  getAllAssessmentRequest(): Observable<any> {
    return this.http.get<any>(this.getAssessmentAllUrl);
  }

  updateAssessmentRequest(data: any,id:number): Observable<any> {
    return this.http.put<any>(this.updateAssessmentByIdUrl+id, data);
  }

  deleteAssessmentRequest(id: number): Observable<any> {
    return this.http.delete<any>(this.deleteAssessmentByIdUrl+id);
  }

}

