import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

/**
 * Component that allows user to log into personal account.
 */
export class LoginComponent {
  public miFormulario: FormGroup = this.fb.group({
    email: [, [Validators.required, Validators.email]],
    password: [, [Validators.required, Validators.min(6)]],
  });

  public accounts: any = [];

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.miFormulario.reset({
      email: '',
      password: '',
    });
  }

  campoEsValido(campo: string) {
    return (
      this.miFormulario.controls[campo].errors &&
      this.miFormulario.controls[campo].touched
    );
  }

  guardar() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }

    this.accounts.push(this.miFormulario.value);

    console.log(this.miFormulario.value);
    console.log(this.miFormulario.valid);

    this.miFormulario.reset();
    this.router.navigateByUrl('/dashboard')
  }
}
