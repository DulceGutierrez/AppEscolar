import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FacadeService } from 'src/app/services/facade.service';
import { Location } from '@angular/common';
import { MaestrosService } from 'src/app/services/maestros.service';

@Component({
  selector: 'app-registro-maestros',
  templateUrl: './registro-maestros.component.html',
  styleUrls: ['./registro-maestros.component.scss']
})
export class RegistroMaestrosComponent implements OnInit {
  @Input() rol: string = "";
  @Input() datos_user: any = {};

  public maestro: any = {};
  public editar: boolean = false;
  public inputType_1: string = 'password';
  public inputType_2: string = 'password';
  public hide_1: boolean = false;
  public hide_2: boolean = false;
  public errors: any = {};

  constructor(
    private location: Location,
    private maestrosService: MaestrosService,
    private facadeService: FacadeService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public regresar(){
    this.location.back();
  }

  //Funciones para password
  public showPassword()
  {
    if(this.inputType_1 == 'password'){
      this.inputType_1 = 'text';
      this.hide_1 = true;
    }
    else{
      this.inputType_1 = 'password';
      this.hide_1 = false;
    }
  }

  public showPwdConfirmar()
  {
    if(this.inputType_2 == 'password'){
      this.inputType_2 = 'text';
      this.hide_2 = true;
    }
    else{
      this.inputType_2 = 'password';
      this.hide_2 = false;
    }
  }

  public registrar(){
    this.errors = {};
    // Debes implementar la función validarMaestro en MaestrosService
    // this.errors = this.maestrosService.validarMaestro(this.maestro, this.editar);
    if(Object.keys(this.errors).length > 0){
      return false;
    }
    // TODO: Aquí va toda la lógica para registrar al maestro
    console.log("Pasó la validación");
  }

  public actualizar(){

  }

  // Función para los campos solo de datos alfabeticos
  public soloLetras(event: KeyboardEvent) {
    const charCode = event.key.charCodeAt(0);
    // Permitir solo letras (mayúsculas y minúsculas) y espacio
    if (
      !(charCode >= 65 && charCode <= 90) &&  // Letras mayúsculas
      !(charCode >= 97 && charCode <= 122) && // Letras minúsculas
      charCode !== 32                         // Espacio
    ) {
      event.preventDefault();
    }
  }

  // Manejo de selección de materias con checkboxes
  public onMateriaChange(event: any, materia: string) {
    if (!this.maestro.materias) {
      this.maestro.materias = [];
    }
    // Angular Material mat-checkbox emits a MatCheckboxChange event
    if (event && event.checked) {
      if (!this.maestro.materias.includes(materia)) {
        this.maestro.materias.push(materia);
      }
    } else {
      this.maestro.materias = this.maestro.materias.filter((m: string) => m !== materia);
    }
  }
}
