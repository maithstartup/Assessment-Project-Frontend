import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

   addProjectUrl ="/api/project/"
   updateProjectUrl ="/api/project/id/"
   getProjectByAssesmentIdUrl ="/api/project/"
   getProjectUrl ="/api/project/id/"
   deleteProjectUrl ="/api/project/id/"

  constructor(private http: HttpClient) { }

  addProjectRequest(data: any): Observable<any> {
    return this.http.post<any>(this.addProjectUrl, data);
  }

  getProjectRequest(data: number): Observable<any> {
    return this.http.get<any>(this.getProjectUrl+data);
  }
  getProjectByAssessmentRequest(data: number): Observable<any> {
    return this.http.get<any>(this.getProjectByAssesmentIdUrl+data);
  }

  updateProjectRequest(data: any,id:number): Observable<any> {
    return this.http.put<any>(this.updateProjectUrl+id, data);
  }

  deleteProjectRequest(id: number): Observable<any> {
    return this.http.delete<any>(this.deleteProjectUrl+id);
  }
}