import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(public http: HttpClient) { }


  getEmployees() {
    return this.http.get("http://localhost:8080/empleados")
  }

  updateEmployee(empleado: any) {
    return this.http.put("http://localhost:8080/updateEmpleados", empleado)
  }

  deleteEmployee(id: number) {
    return this.http.delete(`http://localhost:8080/deleteEmpleados/${id}`)
  }







}