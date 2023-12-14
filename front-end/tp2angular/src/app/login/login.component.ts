import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router, private http: HttpClient, private userService: UserService) {}

  navigateToRegister() {
    this.router.navigate(['/register']);
  }

  login() {
    const bodyData = {
      email: this.email,
      password: this.password,
    };

    this.http.post("http://localhost:3000/abc/student/login", bodyData).subscribe(
      (resultData: any) => {
        if (resultData.success) {
          alert("Login successful");
          this.errorMessage = '';

          const userId = resultData.data?._id;

          if (userId) {
            this.userService.setLoggedInUser(resultData.data);
            this.router.navigate(['profile', userId]);
          } else {
            console.error('Error: User ID is undefined or null');
          }
        } else {
          alert("Incorrect Email or Password");
          this.errorMessage = "Incorrect Email or Password";
          console.log("Error login:", resultData.message);
        }
      },
      (error) => {
        alert("Incorrect Email or Password");
        this.errorMessage = "Incorrect Email or Password";
        console.error("Error login:", error);
      }
    );
  }
}
