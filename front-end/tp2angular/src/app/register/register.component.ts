import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {

  firstname: string = "";
  lastname: string = "";
  email: string = "";
  password: string = "";
  phoneNumber: string = "";

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {}

  register() {
    let bodyData = {
      "firstname": this.firstname,
      "lastname": this.lastname,
      "email": this.email,
      "password": this.password,
      "phoneNumber": this.phoneNumber
    };
    this.http.post("http://localhost:3000/abc/student/create", bodyData).subscribe(
      (resultData: any) => {
        console.log(resultData);
        alert("Registered Successfully");
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error(error);
        alert("Email already exists or invalid data.");
      }
    );
  }

  save() {
    this.register();
  }
}
