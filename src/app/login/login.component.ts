import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario = new FormControl('');
  password = new FormControl('');


  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }
  logIn(usuario: string, password: string, event: Event) {
    event.preventDefault(); // Avoid default action for the submit button of the login form

    // Calls service to login user to the api rest
    this.loginService.login(usuario, password).subscribe(Response => {
      console.log('Token: ', Response.token);
      if (Response.token) {
        this.navigate()
        localStorage.setItem('Token', Response.token);
      }else{
        alert('* * * * Usuario y contraseña incorrecta * * * *');
      }
    }
    );

  }

  navigate() {
    this.router.navigateByUrl('/vista');
  }

}
