import { Component } from '@angular/core';

@Component({
  selector: 'main',
  //templateUrl: './app.component.html',
  template : '<h1> Asslama {{title}} dans angular',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ODDO BHF';
}
