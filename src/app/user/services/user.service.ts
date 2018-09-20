import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  loadUser(id: number): Observable<any> {
    return this.http.get(`https://swapi.co/api/people/${id}`);
  }
}
