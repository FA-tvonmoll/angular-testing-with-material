import { Component, ViewChild } from '@angular/core';
import { MatMenuTrigger, MatSelect } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-testing-with-material';

  @ViewChild('menuTrigger') menuTrigger: MatMenuTrigger;
  @ViewChild('foodSelect') foodSelect: MatSelect;

  foods: {value: string, viewValue: string}[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
}
