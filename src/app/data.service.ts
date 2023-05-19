import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './components/pages/homepage/homepage-data.model';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    private baseUrl = 'http://localhost:3000';

    constructor(private http: HttpClient) { }

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(`${this.baseUrl}/api/users`).pipe(

        );
    }

    getJobPositions(): Observable<any> {
        return this.http.get<any>(`${this.baseUrl}/api/job-positions`).pipe(

        );
    }

    postUser(data: any) {
        this.http.post(`${this.baseUrl}/api/users`, data)
    }
}