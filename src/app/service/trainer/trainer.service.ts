import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  addTrainerUrl = '/api/trainer/';
  trainerLoginUrl = '/api/trainer/login/';
  constructor(private http: HttpClient) { }

  addTrainerRequest(data: any): Observable<any> {
    console.log(data)
    return this.http.post<any>(this.addTrainerUrl, data);
  }

  trainerLoginRequest(data: any): Observable<any> {
    console.log(data)
    return this.http.post<any>(this.trainerLoginUrl, data);
  }

}
