import { Component } from '@angular/core';
import { Student } from './student/student.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-study';

  students = [
    {name: "Joao", isActive: true, class: "Class A"},
	{name: "Maria", isActive: true, class: "Class B"},
	{name: "Fred", isActive: false}
  ];
}
