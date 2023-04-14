// import { Component, OnInit } from '@angular/core';
// import { FormGroup, Validators, FormBuilder } from '@angular/forms';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.scss'],
// })
// export class RegisterComponent implements OnInit {
//   public miFormulario: FormGroup = this.fb.group({
//     name: [, [Validators.required, Validators.min(3)]],
//     email: [, [Validators.required, Validators.email]],
//     password: [, [Validators.required, Validators.min(6)]],
//   });

//   public accounts: any = [];

//   constructor(private fb: FormBuilder,
//     private router: Router) { }

//   ngOnInit() {
//     this.miFormulario.reset({
//       name: '',
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
//     this.miFormulario.reset();

//     this.router.navigateByUrl('/dashboard')
//   }
// }

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  miFormulario: FormGroup = this.fb.group({
    name: ['Test 4', [Validators.required]],
    email: ['test4@test.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]],
  });

  constructor(private fb: FormBuilder,
    private router: Router,
    private authService: AuthService) { }


  registro() {
    const { name, email, password } = this.miFormulario.value;

    this.authService.registro(name, email, password)
      .subscribe(ok => {

        if (ok === true) {
          this.router.navigateByUrl('/dashboard');
        } else {
          Swal.fire('Error', ok, 'error');
        }
      });

  }



}

