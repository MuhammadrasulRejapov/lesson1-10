import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private url = 'http://localhost:3000/tasks'; // JSON Server URL

  constructor(private http: HttpClient) {}

  getTasks(): Observable<any[]> {
    return this.http.get<any[]>(this.url).pipe(
      catchError((err) => {
        console.error('Error fetching tasks:', err);
        return of([]);
      })
    );
  }

  addTask(task: any): Observable<any> {
    return this.http.post<any>(this.url, task).pipe(
      catchError((err) => {
        console.error('Error adding task:', err);
        throw err;
      })
    );
  }

  updateTask(id: number, task: any): Observable<any> {
    return this.http.put<any>(`${this.url}/${id}`, task).pipe(
      catchError((err) => {
        console.error('Error updating task:', err);
        throw err;
      })
    );
  }

  deleteTask(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`).pipe(
      catchError((err) => {
        console.error('Error deleting task:', err);
        throw err;
      })
    );
  }
}