import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  get(url: string, options?: object) {
    return new Promise((response, reject) => {
      this.http.get(url, options).subscribe(res => {
        if ('message' in res) {
          reject({ ...res, error_code: 500 })
        }
        else {
          response({ data:res, error_code: 200 })
        }
      })
    })
  }
  post(url: string, paylaod: object, options?: object) {
    return new Promise((response, reject) => {
      this.http.post(url, paylaod, options).subscribe(res => {
        if ('message' in res) {
          reject({ ...res, error_code: 500 })
        }
        else {
          response({ data:res, error_code: 200 })
        }
      })
    })
  }

}
