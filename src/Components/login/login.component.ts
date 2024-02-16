import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterOutlet, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm!:FormGroup

  constructor(private fb:FormBuilder){

    this.loginForm = this.fb.group({
      Username:['', [Validators.required]],
      Password:['', [Validators.required]]
    })
  }

  authenticate(){
      console.log(this.loginForm.value);
      
  }
}




