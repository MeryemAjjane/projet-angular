import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Payement, Student} from '../model/students.model';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http :HttpClient) { }
  public getAllPayements():Observable<Array<Payement>>{
    return this.http.get<Array<Payement>>(`${environment.backendHost}/payements`);

  }
  public getAllStudents():Observable<Array<Student>>{
    return this.http.get<Array<Student>>(`${environment.backendHost}/students`);

  }
  public getStudentsPayements(code:string):Observable<Array<Payement>>{
    return this.http.get<Array<Payement>>(`${environment.backendHost}/student-details/${code}`);

  }
  public savePayements(formData:any):Observable<Payement>{
    return this.http.post<Payement>(`${environment.backendHost}/payements`,formData);

  }

  getPayementDetails(payementId: number) {
    return this.http.get(`${environment.backendHost}/payementFile/${payementId}`,{responseType:'blob'});
  }
}
