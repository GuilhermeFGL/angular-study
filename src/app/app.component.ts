import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-study';
  student1 = {name: "Joao", isActive: true, class: "Class A"};
  student2 = {name: "Maria", isActive: true, class: "Class B"};
  student3 = {name: "Fred", isActive: false};
}
