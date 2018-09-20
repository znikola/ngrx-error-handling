import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class VehicleService {
  constructor(private http: HttpClient) {}

  loadCart(id: number): Observable<any> {
    return this.http.get(`https://swapi.co/api/vehicles/${id}`);
  }
}
