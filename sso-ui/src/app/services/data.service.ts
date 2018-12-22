import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public serverURL: String = 'http://192.168.56.102:1337';
  constructor() { }
}
