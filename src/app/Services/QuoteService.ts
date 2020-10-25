import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';


import { Quote } from '../Server/Models/Quote';

export interface FeatureObject {
    Feature: string;
    position: number;
    symbol: string;
  }

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
}

@Injectable({
    providedIn: 'root'
  })

  export class QuoteService {
    baseUrl: string = 'https://kbalphawebapi.azurewebsites.net/api/v1';
    FEATURE_DATA: FeatureObject[] = [];
    private _observableList: BehaviorSubject<FeatureObject[]> = new BehaviorSubject([]);

    constructor(private http: HttpClient) { }

    get observableList(): Observable<FeatureObject[]>
    {
       return this._observableList.asObservable();
      }
    // Get Quote
  getFeatures(): Observable<FeatureObject[]> {
    const FEATURE_DATA: FeatureObject[] = [
      {position: 1, Feature: 'It Must look like the IDK app',  symbol: 'H'},
      {position: 2, Feature: 'It Must look like the Bumble app',  symbol: 'He'},
      {position: 3, Feature: 'It Must look like the IDK app', symbol: 'Li'},
      {position: 4, Feature: 'It Must look like the Bumble app',  symbol: 'Be'},
      {position: 5, Feature: 'It Must look like the tiner app',  symbol: 'B'},
      {position: 6, Feature: 'It Must look like the tiner app',  symbol: 'C'},
      {position: 7, Feature: 'It Must look like the Bumble app', symbol: 'F'},
    ];
    this._observableList.next(this.FEATURE_DATA)
    return this.observableList;
  }

  // Delete Quote
  deleteFeature(todo: FeatureObject): Observable<FeatureObject> {
    const url = `${this.baseUrl}/${todo.position}`;

    return this.http.delete<FeatureObject>(url, httpOptions);
  }

  // Add Quote
  addFeature(feature: FeatureObject){
    console.log("ADDFEATURE SERVICE =>  ", feature);
    this.FEATURE_DATA.push(feature);
    this._observableList.next(this.FEATURE_DATA);
  }

}
