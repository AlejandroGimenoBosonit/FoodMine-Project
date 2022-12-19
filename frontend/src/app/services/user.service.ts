import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { IUserLogin } from '../shared/constants/interfaces/IUserLogin';
import { User } from '../shared/models/User';
import { HttpClient } from '@angular/common/http';
import { USER_LOGIN_URL } from '../shared/constants/urls';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<User>(new User());
  
  public userObservable: Observable<User>;

  constructor(private http: HttpClient) { 
    this.userObservable = this.userSubject.asObservable();
  }

  // methods
  login(userLogin: IUserLogin ): Observable<User>{
    return this.http
            .post<User>(USER_LOGIN_URL, userLogin)
            .pipe(
              // Once user wants to login we want to call a toastr banner 
              tap({
                next: (token) =>{
                  console.log(token);
                  console.log('user logged');
                  
                },
                error: (error) =>{
                  console.log('ERROR');
                  
                }
              })
            );
  }
}
