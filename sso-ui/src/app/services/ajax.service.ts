import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestOptions } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class AjaxService {

  constructor(private http: HttpClient) { }

  public get(url: string, data?: any, headers?: any): Promise<any> {
    let options: any;
    if (typeof headers === 'undefined') {
      headers = new Headers({ 'Content-Type': 'application/json', 'responseType': 'json' });
    }
    options = new RequestOptions({ headers: headers });
    const promise = new Promise((resolve, reject) => {
      this.http.get(url, options).subscribe((dataFromServer: any) => {
        resolve(dataFromServer);
      }, (error) => {
        reject(error);
      });
    });
    return promise;
  }

  public post(url: string, data?: any, headers?: any): Promise<any> {
    let options: any;
    if (typeof headers === 'undefined') {
      headers = new Headers({ 'Content-Type': 'application/json', 'responseType': 'json' });
    }
    options = new RequestOptions({ headers: headers });
    const promise = new Promise((resolve, reject) => {
      this.http.post(url, data, options).subscribe((dataFromServer: any) => {
        resolve(dataFromServer);
      }, (error) => {
        reject(error);
      });
    });
    return promise;
  }
}
