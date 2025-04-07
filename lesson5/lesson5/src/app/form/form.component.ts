import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, AbstractControl, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
    <div class="container">
      <h2>{{ editMode ? 'Edit User' : 'Add User' }}</h2>
      <form [formGroup]="form" (ngSubmit)="onSubmit()">
        <input formControlName="firstName" placeholder="Enter first name">
        @if (form.get('firstName')?.touched && form.get('firstName')?.invalid) {
          <p class="error">
            @if (form.get('firstName')?.hasError('required')) {
              First name is required!
            }
            @if (form.get('firstName')?.hasError('minlength')) {
              First name must be at least 3 characters!
            }
            @if (form.get('firstName')?.hasError('noSpaces')) {
              First name cannot contain spaces!
            }
          </p>
        }
        <input formControlName="lastName" placeholder="Enter last name">
        @if (form.get('lastName')?.touched && form.get('lastName')?.invalid) {
          <p class="error">
            @if (form.get('lastName')?.hasError('minlength')) {
              Last name must be at least 3 characters!
            }
            @if (form.get('lastName')?.hasError('noSpaces')) {
              Last name cannot contain spaces!
            }
          </p>
        }
        <button type="submit" [disabled]="form.invalid">{{ editMode ? 'Update' : 'Submit' }}</button>
        @if (editMode) {
          <button type="button" (click)="cancelEdit()">Cancel</button>
        }
      </form>
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
    input {
      display: block;
      margin: 20px auto;
      padding: 10px;
      width: 80%;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
    button {
      display: inline-block;
      margin: 20px 10px;
      padding: 10px 20px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    button:hover {
      background-color: #0056b3;
    }
    button:disabled {
      background-color: #cccccc;
      cursor: not-allowed;
    }
    button[type="button"] {
      background-color: #dc3545;
    }
    button[type="button"]:hover {
      background-color: #c82333;
    }
    .error {
      text-align: center;
      color: #dc3545;
      font-size: 14px;
      margin: 5px 0;
    }
  `]
})
export class FormComponent implements OnInit {
  form!: FormGroup;
  editMode = false;
  editUserId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3), this.noSpaces]],
      lastName: ['', [Validators.minLength(3), this.noSpaces]]
    });

    const state = history.state;
    if (state && state.user) {
      this.editMode = true;
      this.editUserId = state.user.id;
      const [firstName, ...lastNameParts] = state.user.name.split(' ');
      this.form.patchValue({
        firstName,
        lastName: lastNameParts.join(' ')
      });
    }
  }

  noSpaces(control: AbstractControl) {
    if (control.value == null || typeof control.value !== 'string') {
      return null;
    }
    return control.value.includes(' ') ? { noSpaces: true } : null;
  }

  onSubmit() {
    if (this.form.valid) {
      const { firstName, lastName } = this.form.value;
      const fullName = lastName ? `${firstName} ${lastName}` : firstName;
      if (this.editMode && this.editUserId) {
        this.userService.updateUser(this.editUserId, fullName);
      } else {
        this.userService.addUser(fullName);
      }
      console.log('Submitted:', { name: fullName });
      this.form.reset();
      this.editMode = false;
      this.editUserId = null;
      this.router.navigate(['/users']);
    }
  }

  cancelEdit() {
    this.form.reset();
    this.editMode = false;
    this.editUserId = null;
    this.router.navigate(['/users']);
  }
}