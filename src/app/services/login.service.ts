import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public http: HttpClient) { }

  login(login: any) {
    return this.http.post('http://localhost:8080/login', login)

  }


  createEmployee(employee: any){
    return this.http.post('http://localhost:8080/createEmployee', employee)
  }

}
