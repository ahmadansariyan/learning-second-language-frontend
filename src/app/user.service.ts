import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import {Observable} from 'rxjs';
import { user } from './user';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})

export class UserService{
	private apiServerUrl=environment.apiBaseUrl;
	constructor(private http:HttpClient){}

    public getUsers(): Observable<user[]>{
        //console.log(this.apiServerUrl);
        return this.http.get<user[]>(`${this.apiServerUrl}user/all`);

    }
    
    public findUser(userId:number): Observable<user>{
        return this.http.get<user>(`${this.apiServerUrl}user/find/${userId}`);
    }

    public addUser(newuser: user): Observable<user>{
        return this.http.post<user>(`${this.apiServerUrl}user/add`,newuser);
    }

    public updateUser(userId: number): Observable<void>{
        return this.http.delete<void>('${this.apiServerUrl/user/delete/${userId}');
    }

}