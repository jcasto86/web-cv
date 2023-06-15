import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Log } from './components/pages/log/log-data.model';

@Injectable({
  providedIn: 'root'
})
export class RefreshObservableService {
  private dataSubject = new BehaviorSubject<any>(null);
  public data$: Observable<any> = this.dataSubject.asObservable();

  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getData() {
    this.http.get<Log>(`${this.baseUrl}/log`).subscribe(
      (data) => {
        this.dataSubject.next(data);
      },
      (error) => {
        console.error('Error en la petición HTTP GET:', error);
      }
    );
  }
}
