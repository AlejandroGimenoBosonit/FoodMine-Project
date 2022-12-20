import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { IUserLogin } from '../shared/constants/interfaces/IUserLogin';
import { User } from '../shared/models/User';
import { HttpClient } from '@angular/common/http';
import { USER_LOGIN_URL } from '../shared/constants/urls';
import { MessageService } from 'primeng/api';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<User>(new User());
  
  public userObservable: Observable<User>;

  constructor(
    private http: HttpClient, 
    private messageService: MessageService
  ) { 
    this.userObservable = this.userSubject.asObservable();
  }

  // methods
  login(userLogin: IUserLogin ): Observable<User>{
    this.messageService.add({key: 'logged', severity:'success', summary: 'Summary Text', detail: 'Detail Text'});
    return this.http.post<User>(USER_LOGIN_URL, userLogin);
  }
}
