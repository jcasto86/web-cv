import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    private baseUrl = 'http://localhost:3000';

    constructor(private http: HttpClient) { }

    getData() {
        return this.http.get(`${this.baseUrl}/api/data`);
    }

    postUser(data: any) {
        this.http.post(`${this.baseUrl}/users`, data)
    }
}