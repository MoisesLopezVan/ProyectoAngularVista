import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiService } from '../api.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  nombre = new FormControl('');
  apellido = new FormControl('');
  sexo = new FormControl('');
  edad = new FormControl('');
  direccion = new FormControl('');
  carrera = new FormControl('');

  @Input() id;
  registros: any [];

  constructor(private api : ApiService, private activeModal: NgbActiveModal) { 
    this.api.getUser(localStorage.getItem('Token'))
  }

  ngOnInit() {

  }

  editar(){
    let data = {
      id: this.id.value,
      nombres: this.nombre.value,
      apellidos: this.apellido.value,
      sexo: this.sexo.value,
      edad: this.edad.value,
      direccion: this.direccion.value,
      carrera: this.carrera.value
    };
    alert('* * * * Nota: Favor de actualizar la pagina * * * *');
    this.api.detail(this.id,data).subscribe();
    this.activeModal.close();
    return this.id.data;
  }

}
