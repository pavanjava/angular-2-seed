import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class TodoService {

    private languages: Array<String>;
    //private baseUrl = 'https://swapi.co/api/';

    constructor(private http:Http){}

    getLangauges() : Array<String> {
        this.languages = ['ES6','TypeScript','Angular','Mustach','Backbone','lodash'];
        return this.languages;
    }

    // getData() {
    //     return this.http.get(this.baseUrl+'films/').map((res:Response) => res.json());
    // }
}