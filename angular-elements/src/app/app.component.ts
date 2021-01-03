import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-elements',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent implements OnInit{
  title = 'angular-elements';

  rotation;

  ngOnInit(): void {
    this.rotation = `rotateZ(0def)`;
  }

  onChange = value => {
    this.rotation = `rotateZ(${value}deg)`
  }
}
