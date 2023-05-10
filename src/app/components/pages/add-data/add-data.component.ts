import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.scss']
})
export class AddDataComponent {

  //   export interface JobPositionData {
  //   position?: string;
  //   logo?: CompanyLogo;
  //   startDate?: Date;
  //   endDate?: Date;
  //   remote?: boolean;
  //   city?: string;
  //   description?: string;
  // }

  // export interface CompanyLogo {
  //   href?: string;
  //   src?: string;
  //   altText?: string;
  // }

  miFormulario: FormGroup = this.fb.group({
    logoHref: [''],
    logoSrc: [''],
    logoAltText: [''],
    position: ['', [Validators.required]],
    startDate: ['', [Validators.required]],
    endDate: [''],
    city: ['', [Validators.required]],
    remote: [false],
    description: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder,
    private router: Router,
    private authService: AuthService) { }

  addJobPosition() {
    console.log(this.miFormulario.value)

    const { logoHref, logoSrc, logoAltText, position, startDate, endDate, city, remote, description } = this.miFormulario.value;

    this.authService.addJobPosition(logoHref, logoSrc, logoAltText, position, startDate, endDate, city, remote, description)
      .subscribe(ok => {
        if (ok === true) {
          this.router.navigateByUrl('/dashboard');
        } else {
          Swal.fire('Error', ok, 'error');
        }
      });
  }
}
