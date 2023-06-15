import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Log } from './log-data.model';
import { Observable } from 'rxjs';
import { RefreshObservableService } from 'src/app/refresh-observable.service';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient, private refreshObservableService: RefreshObservableService) { }

  getLog(): Observable<Log[]> {
    return this.http.get<Log[]>(`${this.baseUrl}/log`)
  }

  editLog(log: Log) {
    const url = `${this.baseUrl}/log/${log.id}`;
    this.http.put(url, log, { responseType: 'text' }).subscribe(
      () => {
        this.refreshObservableService.getData()
        console.log('Log updated successfully!');
      },
      error => {
        console.log('An error occurred while updating Log: ', error);
      }
    )
    console.log('Log selected to edit: ', log);
  }
}
