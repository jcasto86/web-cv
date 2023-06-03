import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills-form',
  templateUrl: './skills-form.component.html',
  styleUrls: ['./skills-form.component.scss']
})
export class SkillsFormComponent implements OnInit {

  public isFormOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public toogle(): void {
    this.isFormOpen = !this.isFormOpen
  }

}
