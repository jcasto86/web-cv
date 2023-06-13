import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './components/pages/homepage/homepage-data.model';
import { JobPosition } from './components/pages/work-experience/job-position-data.model';
import { Skill } from './components/pages/skills/skill-data.model';
import { EducationData } from './components/pages/education/education-card-data.model';

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
        this.http.delete(url, { responseType: 'text' }).subscribe(
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
        this.http.put(url, jobPosition, { responseType: 'text' }).subscribe(
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



    /// **** JOB POSITIONS ****

    getEducations(): Observable<EducationData[]> {
        return this.http.get<EducationData[]>(`${this.baseUrl}/api/education`)
    }

    postEducation(education: EducationData) {
        this.http.post(`${this.baseUrl}/api/education`, education).subscribe(
            response => {
                console.log('Education inserted successfully --> RESPONSE', response);
            },
            error => {
                console.error('Error inserting Education:', error);
            }
        );
    }

    deleteEducation(id: number) {
        const url = `${this.baseUrl}/api/education/${id}`;
        this.http.delete(url, { responseType: 'text' }).subscribe(
            () => {
                console.log('Education deleted successfully!');
            },
            error => {
                console.log('An error occurred while deleting Education:', error);
            }
        )
    }

    editEducation(education: EducationData) {
        const url = `${this.baseUrl}/api/education/${education.id}`;
        this.http.put(url, education, { responseType: 'text' }).subscribe(
            () => {
                console.log('Education updated successfully!');
            },
            error => {
                console.log('An error occurred while updating the Education: ', error);
            }
        )
    }






    /// **** SKILLS ****

    getSkills(): Observable<Skill[]> {
        return this.http.get<Skill[]>(`${this.baseUrl}/api/skills`)
    }

    postSkill(skill: Skill) {
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

    deleteSkill(id: number) {
        const url = `${this.baseUrl}/api/skills/${id}`;
        this.http.delete(url, { responseType: 'text' }).subscribe(
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
}