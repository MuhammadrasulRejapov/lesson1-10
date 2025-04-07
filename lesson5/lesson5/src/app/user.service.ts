import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersSubject = new BehaviorSubject<any[]>([]);
  users$ = this.usersSubject.asObservable();

  constructor(private http: HttpClient) {
    this.http.get('https://jsonplaceholder.typicode.com/users')
      .subscribe((users: any) => {
        this.usersSubject.next(users);
      });
  }

  addUser(name: string) {
    const currentUsers = this.usersSubject.getValue();
    const newUser = { id: currentUsers.length + 1, name };
    this.usersSubject.next([...currentUsers, newUser]);
  }

  updateUser(id: number, name: string) {
    const currentUsers = this.usersSubject.getValue();
    const updatedUsers = currentUsers.map(user =>
      user.id === id ? { ...user, name } : user
    );
    this.usersSubject.next(updatedUsers);
  }

  deleteUser(id: number) {
    const currentUsers = this.usersSubject.getValue();
    const filteredUsers = currentUsers.filter(user => user.id !== id);
    this.usersSubject.next(filteredUsers);
  }

  getUsers(): Observable<any[]> {
    return this.users$;
  }
}