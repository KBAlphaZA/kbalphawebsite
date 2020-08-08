import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface Config {

}

@Injectable()
export class ConfigService{

  configUrl = 'config.json';

  constructor(private http: HttpClient){}

  getConfig(){
    return this.http.get<Config>(this.configUrl).pipe(retry(3), // try a failed request 3 times
    // catchError(this.handleError) then handle the errors
    );

  }
}
