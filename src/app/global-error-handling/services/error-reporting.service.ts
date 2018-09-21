import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { GlobalError } from '../models/global-error-handling.model';

@Injectable()
export class ErrorReportingService {
  constructor(private http: HttpClient) {}

  report(globalError: GlobalError): Observable<any> {
    // TODO: send the 'error' to the server
    return this.http.post('', globalError);
  }
}
