import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { FormControl } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RegistroComponent } from '../registro/registro.component';
import { EditarComponent } from '../editar/editar.component';
import { Router } from '@angular/router';



@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponent {

  id = new FormControl('');
  nombre = new FormControl('');
  apellido = new FormControl('');
  sexo = new FormControl('');
  edad = new FormControl('');
  direccion = new FormControl('');
  carrera = new FormControl('');

  registro: any = [];

  busquedaNombre;
  busquedaEdad;
  busquedaCarrera;
  //busquedaId;

  constructor(private api: ApiService, private modalService: NgbModal, private router: Router) {
    this.obtenerDatos();
  }
  obtenerDatos(){
    let token = localStorage.getItem('Token')
    this.api.getUser(token).subscribe(response => {
      console.log(response);
      this.registro = response;
    })
  }
  ngOnInit() {
   this.obtenerDatos;
  }

  open() {
    this.modalService.open(RegistroComponent);
  }

  openedit(id) {
    const modalRef = this.modalService.open(EditarComponent);
    modalRef.componentInstance.id = id;
  }
 
  opendelete(id){
    alert('* * * * Nota: Favor de actualizar la pagina * * * *');
    this.api.delete(id).subscribe();
  }

  filtrar1() {
    //Busqueda Nombre
    console.log(this.busquedaNombre);
    let filtro1 = this.registro.filter(registro => {
      return registro.nombres.includes(this.busquedaNombre);
    })
    this.registro = filtro1; 
    alert('* * * * Si deseas buscar otro nombre, Haz click "Actualizar" * * * *');
    /*let filtro2 = this.registro.filter(registro => {
      registro.edad.includes(this.busquedaEdad);
      return registro.edad.includes(this.busquedaEdad);;
    })
    this.registro = filtro2; 
    let filtro3 = this.registro.filter(registro => {
      registro.carrera.includes(this.busquedaCarrera);
      return registro.carrera.includes(this.busquedaCarrera);;
    })
    this.registro = filtro3; */
  }

  /*Busqueda(id){
    let data = {
      id :  this.busquedaId.value,
      nombres: this.nombre.value,
      apellidos: this.apellido.value,
      edad: this.edad.value,
      sexo: this.sexo.value,
      direccion: this.direccion.value,
      carrera: this.carrera.value
    }
    console.log(this.busquedaId);
    this.api.filtrarBusqueda(id,data).subscribe(response =>{
      console.log(response);
    });
  }*/

  actualizarfiltro(){
    this.obtenerDatos();
  }

  cerrarSession(){
    this.obtenerDatos;
    this.navigate();
  }
  navigate() {
    this.router.navigateByUrl('/login');
  }
}
