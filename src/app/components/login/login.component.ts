import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  errors: any = []

  public data = {
    username: '', 
    password: ''
  }

  constructor(public loginService: LoginService, public router: Router) {}

  newLogin() {
    console.log(this.data)
    this.loginService.login(this.data).subscribe((res:any) => {
      this.router.navigate(['/empleados'])
    }, (err) => this.errors.push(err.error.text))

  }

}
