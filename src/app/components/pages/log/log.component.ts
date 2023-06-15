import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Log } from './log-data.model';
import { LogService } from './log.service';
import { tap } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss']
})
export class LogComponent implements OnInit, AfterViewInit {

  public log?: Observable<Log[]>;

  public isAuth: boolean = false;

  public subscription: Subscription = new Subscription;

  constructor(private fb: FormBuilder, private logService: LogService) {
    this.log = this.logService.getLog()
  }

  public logForm: FormGroup = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  })

  /**
  * Gets the email from data form.
  */
  public get email(): FormControl {
    return this.logForm.get('email') as FormControl;
  }

  /**
  * Gets the password from data form.
  */
  public get password(): FormControl {
    return this.logForm.get('password') as FormControl;
  }

  ngOnInit(): void {
    this.log?.pipe(
      tap(
        (a) => {
          console.log('A: ', a);
        }
      )
    ).subscribe()
  }

  ngAfterViewInit(): void { }

  public onSubmit() {
    console.log('FORM VALUE: ', this.logForm.value);
    const log = { id: 1, authorized: 1 }

    const email = this.logForm.get('email')?.value;

    const password = this.logForm.get('password')?.value;


    if ((email === 'jksto@hotmail.com') && (password === '123456')) { this.editLogIn(log) }
    this.log = this.logService.getLog()

    this.logForm.reset()
  }

  public editLogIn(log: Log) {
    console.log('LOG: ', log);
    this.logService.editLog(log)
    this.log = this.logService.getLog()

  }

  public logout() {
    const log = { id: 1, authorized: 0 }
    this.logService.editLog(log)
    this.log = this.logService.getLog()
  }
}
