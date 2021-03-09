import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

   addQuizUrl ="/api/quiz/"
   updateQuizUrl ="/api/quiz/id/"
   getQuizByAssesmentIdUrl ="/api/quiz/"
   getQuizUrl ="/api/quiz/id/"
   deleteQuizUrl ="/api/quiz/id/"

  constructor(private http: HttpClient) { }

  addQuizRequest(data: any): Observable<any> {
    return this.http.post<any>(this.addQuizUrl, data);
  }

  getQuizRequest(data: number): Observable<any> {
    return this.http.get<any>(this.getQuizUrl+data);
  }
  getQuizByAssessmentRequest(data: number): Observable<any> {
    return this.http.get<any>(this.getQuizByAssesmentIdUrl+data);
  }

  updateQuizRequest(data: any,id:number): Observable<any> {
    return this.http.put<any>(this.updateQuizUrl+id, data);
  }

  deleteQuizRequest(id: number): Observable<any> {
    return this.http.delete<any>(this.deleteQuizUrl+id);
  }
}
