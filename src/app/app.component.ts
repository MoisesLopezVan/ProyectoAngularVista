import { Component, OnInit } from '@angular/core';
import {LoginService} from './login.service';
import {HttpClient} from '@angular/common/http'; 
import { FormControl } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProyectoEscolar';
  
 
}