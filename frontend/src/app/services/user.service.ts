import { Injectable } from '@angular/core';
import { BehaviorSubject, mergeMap, Observable, Subject, switchMap, tap } from 'rxjs';
import { IUserLogin } from '../shared/constants/interfaces/IUserLogin';
import { User } from '../shared/models/User';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { USER_LOGIN_URL, GET_USER_DATA } from '../shared/constants/urls';
import { MessageService } from 'primeng/api';



@Injectable({
  providedIn: 'root'
})
export class UserService {


  public USER_KEY: string = 'User';
  private userSubject = new BehaviorSubject<User>(this.getUserFromLocalStorage());
  public userObservable:Observable<User>;

  constructor(
    private http: HttpClient, 
    private messageService: MessageService
  ) {
    this.userObservable = this.userSubject.asObservable();
  }

  public get currentUser():User{
    return this.userSubject.value;
  }

  // methods
  login(userLogin: IUserLogin ): Observable<User>{
    return this.http
    .post<User>(USER_LOGIN_URL, userLogin)
    .pipe(
      tap({
        next: response => {
          console.log(response);
          
          this.userSubject.next(response);
          // primeng toast
          this.messageService.add({key: 'logged', severity:'success', summary: 'Success', detail: 'Success at Login'});  
        },
        error: errResponse => {
          console.log(errResponse);
          // primeng toast
          this.messageService.add({key: 'logged', severity:'error', summary: 'Error', detail: 'Error at Login'});
        }
      })
    )
  }

  logout(){
    // clear user subject and local storage
    this.userSubject.next(new User());
    localStorage.removeItem(this.USER_KEY);

    // reload page to change header
    window.location.reload();
  }

  getUserByToken(): Observable<User>{
    const token = this.getUserFromLocalStorage();
    const headers = new HttpHeaders().set('x-access-token', token);
    return this.http.get<User>(GET_USER_DATA, {headers});
  }

  // local storage
  private setUserToLocalStorage(userToken: string): void{
    localStorage.setItem(this.USER_KEY, JSON.stringify(userToken));
  }

  private getUserFromLocalStorage(): any{
    const userJson = localStorage.getItem(this.USER_KEY);
    return userJson ? JSON.parse(userJson).token : '';
  }

}
