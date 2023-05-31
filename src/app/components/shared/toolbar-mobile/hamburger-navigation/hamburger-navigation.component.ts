import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hamburger-navigation',
  templateUrl: './hamburger-navigation.component.html',
  styleUrls: ['./hamburger-navigation.component.scss']
})
export class HamburgerNavigationComponent implements OnInit {

  @Output() public closeJobPositionFormModal = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }
}
