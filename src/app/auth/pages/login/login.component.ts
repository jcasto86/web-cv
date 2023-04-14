// import { Component, OnInit } from '@angular/core';
// import {
//   FormGroup,
//   FormControl,
//   FormBuilder,
//   Validators,
// } from '@angular/forms';
// import { Router } from '@angular/router';
// import { AuthService } from '../../services/auth.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.scss'],
// })

// /**
//  * Component that allows user to log into personal account.
//  */
// export class LoginComponent {
//   public miFormulario: FormGroup = this.fb.group({
//     email: ['', [Validators.required, Validators.email]],
//     password: ['', [Validators.required, Validators.min(6)]],
//   });

//   public accounts: any = [];

//   constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) { }

//   ngOnInit() {
//     this.miFormulario.reset({
//       email: '',
//       password: '',
//     });
//   }

//   campoEsValido(campo: string) {
//     return (
//       this.miFormulario.controls[campo].errors &&
//       this.miFormulario.controls[campo].touched
//     );
//   }

//   guardar() {
//     if (this.miFormulario.invalid) {
//       this.miFormulario.markAllAsTouched();
//       return;
//     }

//     this.accounts.push(this.miFormulario.value);

//     console.log(this.miFormulario.value);
//     console.log(this.miFormulario.valid);

//     this.miFormulario.reset();
//     // this.router.navigateByUrl('/dashboard')

//     //Extraigo el email y el password del value del formulario y los guardo en esta constante
//     const { email, password } = this.miFormulario.value;
//     this.authService.login(email, password)
//       .subscribe(
//         response => {
//           console.log(response);
//         }
//       )
//   }
// }


import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  miFormulario: FormGroup = this.fb.group({
    email: ['test1@test.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]],
  });

  constructor(private fb: FormBuilder,
    private router: Router,
    private authService: AuthService) { }


  login() {

    const { email, password } = this.miFormulario.value;

    this.authService.login(email, password)
      .subscribe(ok => {
        console.log(ok);

        if (ok) {
          this.router.navigateByUrl('/dashboard');
        } else {
          Swal.fire('Error', ok, 'error');
        }
      });
  }

}
