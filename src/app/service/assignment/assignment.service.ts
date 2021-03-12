import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {

  addAssignmentUrl ="/api/assignment/"
   updateAssignmentUrl ="/api/assignment/id/"
   getAssignmentByAssesmentIdUrl ="/api/assignment/"
   getAssignmentUrl ="/api/assignment/id/"
   deleteAssignmentUrl ="/api/assignment/id/"

  constructor(private http: HttpClient) { }

  addAssignmentRequest(data: any): Observable<any> {
    return this.http.post<any>(this.addAssignmentUrl, data);
  }

  getAssignmentRequest(data: number): Observable<any> {
    return this.http.get<any>(this.getAssignmentUrl+data);
  }
  getAssignmentByAssessmentRequest(data: number): Observable<any> {
    return this.http.get<any>(this.getAssignmentByAssesmentIdUrl+data);
  }

  updateAssignmentRequest(data: any,id:number): Observable<any> {
    return this.http.put<any>(this.updateAssignmentUrl+id, data);
  }

  deleteAssignmentRequest(id: number): Observable<any> {
    return this.http.delete<any>(this.deleteAssignmentUrl+id);
  }
}
