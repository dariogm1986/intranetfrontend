import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validator, Validators } from '@angular/forms';

import Swal from 'sweetalert2';

import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public formSubmitted = false;

  public registerForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      password2: ['', Validators.required],
  });

  constructor( private fb: FormBuilder,
                private usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

  crearUsuario(){
    this.formSubmitted = true;
    console.log(this.registerForm.value);

    if(this.registerForm.invalid){
      return;
    }

    //realizar el posteo
    this.usuarioService.crearUsuario(this.registerForm.value)
        .subscribe(resp => {
          console.log('Usuario Creado');
          console.log(resp);
        },(err) => {
          //Si sucede un error
          Swal.fire('Error', err.error.msg, 'error');
        });

  }

  passwordNoValidas(){
    const passw1 = this.registerForm.get('password').value;
    const passw2 = this.registerForm.get('password2').value;

    if ((passw1 !== passw2) && (this.formSubmitted)){
      return true;
    }else{
      return false;
    }
  }

  campoNoValido(campo:string):boolean {
      return false;
  }

}
