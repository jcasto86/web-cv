import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';

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
    username: [, [Validators.required, Validators.minLength(3)]],
    password: [, [Validators.required, Validators.min(0)]],
  });

  public accounts: any = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.miFormulario.reset({
      username: '',
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
    this.miFormulario.reset();
  }
}
