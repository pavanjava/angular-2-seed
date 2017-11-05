import { Component } from '@angular/core';
import { TypeScriptService } from './app.tsservice';

@Component({
  selector: 'page-root',
  templateUrl: './app.tscomponent.html',
  styleUrls: ['./app.tscomponent.css'],
  providers:[TypeScriptService]
})

export class TypeScriptComponent {
  page:String; 
  constructor(private _tsService: TypeScriptService) {}

  ngOnInit() {
    this.page = this._tsService.getPageName();
  }

}
