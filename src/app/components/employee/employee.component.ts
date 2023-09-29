import {Component} from '@angular/core';
import {EmployeesService} from 'src/app/services/employees.service';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({selector: 'app-employee', templateUrl: './employee.component.html', styleUrls: ['./employee.component.css']})
export class EmployeeComponent {

  public data: any = []
  public displayStyle =  "none"
  public displayEdit = "none"
  public errors : any= []
  employee:any = {
    fullname: '',
    username: '',
    email: '',
    password: ''

  }

  repass = ''


    constructor(public employeeService : EmployeesService, public loginService : LoginService, public router: Router) {
      this.getEmployees()
    }

    getEmployees() {
        this.employeeService.getEmployees().subscribe((res : any) => {
          if(res) {
            console.log(res)
            this.data = res
          }
        })
    }

    openPopup() {
      this.displayStyle = "block"
    }
  
  
    closePopup() {
      this.displayStyle = "none"
    }

    closeEdit() {
      this.displayEdit = "none"
    }

    openEdit(item:any) {
      this.displayEdit = "block"
      this.repass = item.password
      this.employee = item
    }



    checkPassword() {
      this.errors = []
      if(this.employee.password != this.repass) {
        this.errors.push("Las claves deben ser iguales")
      } 

      if(this.employee.name == '' || this.employee.email== '' || this.employee.username == '' || this.employee.password == ''){
        this.errors.push("Los campos no pueden estar vacios")
      }

    }

    createEmployee() {
      this.checkPassword()
      if(this.errors.length == 0) {
        this.loginService.createEmployee(this.employee).subscribe((res:any) => {
          this.router.navigate([''])
        }, (err) => this.errors.push(err.error.text))
      }
    }

    editEmployee() {
      this.employeeService.updateEmployee(this.employee).subscribe((res:any) => {
        this.router.navigate([''])
      }, (err) => this.errors.push(err.error.text))
    }

    

    deleteEmployee() {
      console.log(typeof(this.employee.employeeId))
      this.employeeService.deleteEmployee(this.employee.employeeId).subscribe((res:any) => {
        this.router.navigate([''])
      })

    }
}
