import { Component } from '@angular/core';

import { TodoService } from './app.todoservice'
import {AngularComponent} from '../Angular/app.angularcomponent';

@Component({
  selector: 'language-root',
  templateUrl: './app.todocomponent.html',
  styleUrls: ['./app.todocomponent.css'],
  providers:[TodoService]
})
export class LanguageComponent {
  languages:Array<String>; 
  constructor(private _todoService: TodoService) {}

  ngOnInit() {
    this.languages = this._todoService.getLangauges();
  }

}
