import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class TypeScriptService {

    private page: String = 'TypeScript';

    getPageName() : String {
        return this.page;
    }
}