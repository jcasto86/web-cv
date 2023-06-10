import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './components/pages/homepage/homepage-data.model';
import { JobPosition } from './components/pages/work-experience/job-position-data.model';
import { Skill } from './components/pages/skills/skill-data.model';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    private baseUrl = 'http://localhost:3000';

    constructor(private http: HttpClient) { }

    /// **** USERS ****

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(`${this.baseUrl}/api/users`).pipe(
        );
    }

    postUser(data: any) {
        this.http.post(`${this.baseUrl}/api/users`, data)
    }

    /// **** JOB POSITIONS ****

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
                console.log('An error occurred while updating the Job Position: ', error);
                // Handle any error actions here
            }
        )
        console.log('Job Position selected to edit: ', jobPosition);
        // return of([])
    }

    /// TODO: **** EDUCATION ****


    /// **** SKILLS ****

    getSkills(): Observable<Skill[]> {
        return this.http.get<Skill[]>(`${this.baseUrl}/api/skills`)
    }

    postSkills(skill: Skill) {
        this.http.post(`${this.baseUrl}/api/skills`, skill).subscribe(
            response => {
                console.log('Skill inserted successfully --> RESPONSE', response);
                // Handle success response if needed
            },
            error => {
                console.error('Error inserting Skill: ', error);
                // Handle error response if needed
            }
        );
    }

    deleteSkills(id: number) {
        const url = `${this.baseUrl}/api/skills/${id}`;
        this.http.delete(url).subscribe(
            () => {
                console.log('Skill deleted successfully!');
                // Handle any success actions here
            },
            error => {
                console.log('An error occurred while deleting Skill: ', error);
                // Handle any error actions here
            }
        )
    }

    editSkills(skill: Skill) {
        const url = `${this.baseUrl}/api/job-positions/${skill.id}`;
        this.http.put(url, skill).subscribe(
            () => {
                console.log('Skill updated successfully!');
                // Handle any success actions here
            },
            error => {
                console.log('An error occurred while updating the Skill: ', error);
                // Handle any error actions here
            }
        )
        console.log('Skill selected to edit: ', skill);
        // return of([])
    }


}