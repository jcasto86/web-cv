import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './components/pages/homepage/homepage-data.model';
import { JobPosition } from './auth/interfaces/interfaces';
import { catchError } from 'rxjs/operators';

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

    postUser(data: any) {
        this.http.post(`${this.baseUrl}/api/users`, data)
    }

    getJobPositions(): Observable<any> {
        return this.http.get<any>(`${this.baseUrl}/api/job-positions`).pipe(

        );
    }

    // postJobPosition(jobPosition: JobPosition) {
    //     return this.http.post<JobPosition>(`${this.baseUrl}/api/job-positions`, jobPosition)
    // }

    // postJobPosition(jobPosition: JobPosition): Observable<JobPosition> {
    //     return this.http.post<JobPosition>(`${this.baseUrl}/api/job-positions`, jobPosition)
    // }

    // addHero(hero: Hero): Observable<Hero> {
    //     return this.http.post<Hero>(this.heroesUrl, hero, httpOptions)
    //         .pipe(
    //             catchError(this.handleError('addHero', hero))
    //         );
    // }


}