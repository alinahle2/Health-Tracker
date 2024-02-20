import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiservesService {
  constructor(
    private _http:HttpClient,
  ) { }
  apiurl='http://localhost:3000/users';
  getalldata(): Observable<any> {
    return this._http.get(`${this.apiurl}`);
  }
  createData(data:any):Observable<any>{
  	return this._http.post(`${this.apiurl}/post`, data)
  }
  deleteData(id:any):Observable<any>{
    let ids=id;
  	return this._http.delete(`${this.apiurl}/delete/${ids}`)
  }
  updateData(data:any,id:any):Observable<any>{
    let ids=id;
  	return this._http.put(`${this.apiurl}/put/${ids}`,data)
  }
  getdatabyid(id:any): Observable<any> {
    let ids=id;
    return this._http.get(`${this.apiurl}/${ids}`);
  }
}
