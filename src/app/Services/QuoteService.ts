import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Quote } from 'src/app/Server/Models/Quote';
import { IFeatureListing } from '../Server/Models/Project';


const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
}

@Injectable({
    providedIn: 'root'
  })

  export class QuoteService {
    quoteForm: Quote;
    baseUrl: string = 'https://kbalphawebapi.azurewebsites.net/api/v1';
    FEATURE_DATA: IFeatureListing[] = [];
    private _observableList: BehaviorSubject<IFeatureListing[]> = new BehaviorSubject([]);

    constructor(private http: HttpClient) { }

    get observableList(): Observable<IFeatureListing[]>
    {
       return this._observableList.asObservable();
      }
    // Get Quote
  getFeatures(): Observable<IFeatureListing[]> {

    this._observableList.next(this.FEATURE_DATA);
    return this.observableList;
  }

  // Delete Quote
  deleteFeature(todo: IFeatureListing): Observable<IFeatureListing> {
    const url = `${this.baseUrl}/${todo.position}`;

    // const index = this.FEATURE_DATA.indexOf(button, 0);
    // if (index > -1) {
    //  this.FEATURE_DATA.splice(index, 1);
    // }

    return this.http.delete<IFeatureListing>(url, httpOptions);
  }

  // Add Quote
  addFeature(feature: IFeatureListing){
    this.FEATURE_DATA.push(feature);
    this._observableList.next(this.FEATURE_DATA);
  }

  postCompletedForm(completeform)
  {
    const url = `${this.baseUrl}`;

    this.http.post(url, completeform);
  }
}
