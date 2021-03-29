import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css'],
  providers:[AuthService]
})
export class UserSignupComponent implements OnInit {

  signupForm = new FormGroup({
    name: new FormControl(''),
    surname: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  async onSignUp(){
    const { email, password } = this.signupForm.value;
    try {
      const user = await this.authService.SignUp(email, password);
      //Redirect to homepage
      console.log(user);
      
      if(user){ this.router.navigate(['/index']);  }
    } 
    catch (error) { console.log(error); }
  }
}
