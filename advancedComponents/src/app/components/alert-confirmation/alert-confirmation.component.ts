import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-confirmation',
  templateUrl: './alert-confirmation.component.html',
  styleUrls: ['./alert-confirmation.component.css']
})
export class AlertConfirmationComponent implements OnInit {

  active: Boolean;

  constructor() {
    this.active = false;
  }

  ngOnInit(): void {
  }

  hide = () => {
    this.active = false;
  }

  show = () => {
    this.active = true;
  }

}
