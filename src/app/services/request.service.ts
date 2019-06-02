import { Injectable } from '@angular/core'
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class requestService {

    apiHost = 'http://localhost:8080';

    constructor(private http: HttpClient) { }

    getSearch(param): Observable<HttpResponse<any>> {
        return this.http.get<any>(
            this.apiHost + '/medical/appointment' + param, {
                observe: 'response'
            });
    }

}