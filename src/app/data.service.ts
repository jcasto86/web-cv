import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './components/pages/homepage/homepage-data.model';
import { JobPosition } from './components/pages/work-experience/job-position-data.model';

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

    getJobPositions(): Observable<JobPosition[]> {
        return this.http.get<JobPosition[]>(`${this.baseUrl}/api/job-positions`)
    }

    postJobPosition(jobPosition: JobPosition) {
        this.http.post(`${this.baseUrl}/api/job-positions`, jobPosition).subscribe(
            response => {
                console.log('Job Position inserted successfully --> RESPONSE', response);
                // Handle success response if needed
            },
            error => {
                console.error('Error inserting Job Position:', error);
                // Handle error response if needed
            }
        );
    }

    deleteJobPosition(id: number) {
        const url = `${this.baseUrl}/api/job-positions/${id}`;
        this.http.delete(url).subscribe(
            () => {
                console.log('Job Position deleted successfully!');
                // Handle any success actions here
            },
            error => {
                console.log('An error occurred while deleting Job Position:', error);
                // Handle any error actions here
            }
        )
    }

    editJobPosition(jobPosition: JobPosition) {
        const url = `${this.baseUrl}/api/job-positions/${jobPosition.id}`;
        this.http.put(url, jobPosition).subscribe(
            () => {
                console.log('Row updated successfully!');
                // Handle any success actions here
            },
            error => {
                console.log('An error occurred while updating the row:', error);
                // Handle any error actions here
            }
        )
        console.log('Job Position selected to edit: ', jobPosition);
        // return of([])
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