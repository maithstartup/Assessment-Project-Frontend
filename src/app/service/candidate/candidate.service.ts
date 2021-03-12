import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  constructor(private http:HttpClient) { }

  getCountByLocationUrl ="/api/course/score/location/"

  getCountByLocationRequest(data: number): Observable<any> {
    return this.http.get<any>(this.getCountByLocationUrl+data);
  }
  
}
