import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url:string = "http://localhost:8088/api/addNewProduct"
  constructor(
    private http:HttpClient
  ) { }

  addNewProduct(body) : Observable<ResponseMsg[]> {
    return this.http.post<ResponseMsg[]>(this.url,body);
  }
}

export interface ResponseMsg {
  message:string;
  msgClass:string;
}
