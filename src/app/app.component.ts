import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'web-cv';
  public router: Router;

  constructor(private _router: Router) {
    this.router = _router;
  }
}
