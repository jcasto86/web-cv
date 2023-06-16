import { Component, HostBinding, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { AuthService } from '../../services/auth.service';
import { ConfigService } from 'src/app/config.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @HostBinding('style.--custom-title-color') customColor: string = 'lightseagreen';

  miFormulario: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private configService: ConfigService) { }

  //TODO: DEJAR ESTE DE ARRIBA PARA SUBIR
  // registro() {
  //   const { name, email, password } = this.miFormulario.value;

  //   this.authService.registro(name, email, password)
  //     .subscribe(ok => {

  //       if (ok === true) {
  //         this.router.navigateByUrl('/dashboard');
  //       } else {
  //         Swal.fire('Error', ok, 'error');
  //       }
  //     });
  // }

  registro() {
    const { name, email, password } = this.miFormulario.value;

    this.authService.registro(name, email, password)
      .subscribe(ok => {
        Swal.fire('Thanks for registering, Javier!', ok, 'success');
        this.miFormulario.reset()
        setTimeout(() => {
          this.router.navigate(['/log']);
        }, 3000);
      });
  }

  ngOnInit() {
    this.configService.getSelectedTitleOption().subscribe(option => {
      if (option === 'lightseagreen') {
        this.customColor = 'lightseagreen';
      } else if (option === 'lightcoral') {
        this.customColor = 'lightcoral';
      } else {
        this.customColor = 'lightseagreen';
      }
    });
  }
}

