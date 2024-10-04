import { Component } from '@angular/core';
import { FieldsetModule } from 'primeng/fieldset';
import { CommonModule } from '@angular/common';
// import { InputTextModule } from 'primeng/inputtext'; 
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FieldsetModule,
    CommonModule,
    // InputTextModule, 
    CardModule,
    InputTextModule,
    ReactiveFormsModule,
    FloatLabelModule,
    ButtonModule,
    RouterModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm=this.fb.group({
    email:['', [Validators.required, Validators.email]],
    password:['', Validators.required]
  })

  // router: any;


  constructor(private fb:FormBuilder,private router:Router){}
  login(){
    const {email,password}=this.loginForm.getRawValue();

    if (email === 'dhanya@123' && password === '123') {
      this.router.navigate(['/newhome']); 
    } else {
      console.log('Invalid '); 
    }
  }
}
