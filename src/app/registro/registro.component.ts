import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiService} from '../api.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent { 

  nombre = new FormControl('');
  apellido = new FormControl('');
  edad = new FormControl('');
  sexo = new FormControl('');
  direccion = new FormControl('');
  carrera = new FormControl('');


  constructor(private api : ApiService, private activeModal: NgbActiveModal) {
    this.api.getUser(localStorage.getItem('Token'))
   }

  ngOnInit() {
  }

  guardar(){
    let result :"Saved";
    let data = {
      nombres: this.nombre.value,
      apellidos: this.apellido.value,
      edad: this.edad.value,
      sexo: this.sexo.value,
      direccion: this.direccion.value,
      carrera: this.carrera.value
    };
    alert('* * * * Nota: Favor de actualizar la pagina * * * *');
    this.api.create(data).subscribe(response => {
      console.log(response)
    });
    this.activeModal.close();
  }
}
