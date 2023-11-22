import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environnement } from 'src/environnements/environnement-prod';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(
    private httpClient:HttpClient,
  ) { }

  addEmployee(employee : any) : Observable<any>{
    return this.httpClient.post<any>(environnement.serverUrl, employee);
  }

  getAllEmployees(): Observable<any[]>{
    return this.httpClient.get<any[]>(environnement.serverUrl+'employee');
  
  }

  getEmployeeById(id:number): Observable<any[]>{
    return this.httpClient.get<any[]>(environnement.serverUrl+'employee/'+id);
  
  }
}
