import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IHttpResult} from '../phone/i-http-result';
import {IPhone} from '../phone/iphone';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {
  url = 'http://127.0.0.1:8000/api/phones';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<IHttpResult> {
    return this.http.get<IHttpResult>(this.url);
  }

  addPhone(phone: IPhone): Observable<IHttpResult> {
    return this.http.post<IHttpResult>(this.url + '/create', phone);
  }

  deleteSuccess(id: number): Observable<IHttpResult> {
    return this.http.delete<IHttpResult>(this.url + '/' + id);
  }

  findById(id: number): Observable<IHttpResult> {
    return this.http.post<IHttpResult>(this.url + '/' + id + '/find', id);
  }

  updateSuccess(id: number, newPhone: IPhone) {
    return this.http.put<IHttpResult>(this.url + '/' + id + '/edit', newPhone);
  }
}
