import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../user.service';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="container">
      <h2>Users List</h2>
      <ul>
        @for (user of users; track user.id) {
          <li>
            {{ user.name }}
            <div class="button-group">
              <button class="edit-btn" (click)="editUser(user)">Edit</button>
              <button class="delete-btn" (click)="deleteUser(user.id)">Delete</button>
            </div>
          </li>
        }
      </ul>
    </div>
  `,
  styles: [`
    .container {
      max-width: 600px;
      margin: 20px auto;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 8px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }
    h2 {
      text-align: center;
      color: #333;
      font-family: Arial, sans-serif;
    }
    ul {
      list-style: none;
      padding: 0;
    }
    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px;
      border-bottom: 1px solid #ccc;
    }
    .button-group {
      display: flex;
      gap: 10px; /* Tugmalar orasidagi bo‘shliq */
    }
    button {
      padding: 8px 16px; /* Bir xil padding */
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 14px;
      line-height: 1; /* Bir xil balandlik uchun */
    }
    .edit-btn {
      background-color: #007bff;
      color: white;
    }
    .edit-btn:hover {
      background-color: #0056b3;
    }
    .delete-btn {
      background-color: #dc3545;
      color: white;
    }
    .delete-btn:hover {
      background-color: #c82333;
    }
  `]
})
export class UsersComponent implements OnInit {
  users: any[] = [];

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  editUser(user: any) {
    this.router.navigate(['/form'], { state: { user } });
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id);
  }
}