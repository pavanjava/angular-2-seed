import { Component } from '@angular/core';
import { AngularService } from './app.angularservice';

@Component({
  selector: 'angular-root',
  templateUrl: './app.angularcomponent.html',
  styleUrls: ['./app.angularcomponent.css'],
  providers:[AngularService]
})

export class AngularComponent {
  page:String; 
  constructor(private _angularService: AngularService) {}

  ngOnInit() {
    this.page = this._angularService.getPageName();
  }

}
