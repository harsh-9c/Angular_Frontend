import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  user: User = new User();
  errorSign: boolean = false;
  userData: any;

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  saveUser() {
    this.authService.login(this.user).subscribe(
      (data) => {
        console.log(data);
        this.userData = JSON.parse(JSON.stringify(data));
        localStorage.setItem('userId', this.userData.result.employeeId);
        console.log(this.userData.result.employeeId);

        console.log(this.userData.status);
        if (this.userData.status == 200) {
          this.router.navigate(['/sidenav']);
        } else if (this.userData.status == 202) {
          this.router.navigate(['/manager']);
        } else {
          this.router.navigate(['/employee']);
        }
      },
      (error) => {
        console.log(error);
        if (error.status == 404) {
          this.errorSign = true;
          this.router.navigate(['/login']);
        }
      }
    );
  }

  goToHomePage() {
    this.router.navigate(['/home']);
  }

  onSubmit() {
    this.saveUser();
  }
}
