import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FacadeService } from '../../services/facade.service';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent implements OnInit {

  // Datos del formulario

  public username: string = '';
  public password: string = '';
  public type: string = 'password';
  public errors:any = [];
  public load: boolean = false;


  // Constructor


  constructor(
    public router: Router,
    public FacadeService: FacadeService
  ) { }

  ngOnInit(): void {
  }

  public login(){
    this.errors = {};
    this.errors = this.FacadeService.validarLogin(this.username, this.password);
    if(Object.keys(this.errors).length > 0){
      return false;
    }
  }

  public showPassword(){
    this.type = this.type === 'password' ? 'text' : 'password';
  }

  public registrar(){
    this.router.navigate(['/registro-usuarios']);
  }




}
