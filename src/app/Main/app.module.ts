import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule,Routes} from '@angular/router';

import { AppComponent } from './app.component';
import {LanguageComponent} from '../Todo/app.todocomponent';
import {AngularComponent} from '../Angular/app.angularcomponent';
import {TypeScriptComponent} from '../TypeScript/app.tscomponent';

const appRoutes : Routes = [
  { path: 'Angular', component: AngularComponent },
  {path: 'TypeScript', component: TypeScriptComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LanguageComponent,
    AngularComponent,
    TypeScriptComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent,LanguageComponent]
})
export class AppModule { }
