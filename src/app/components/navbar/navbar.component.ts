import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  user: any;
  userType: string | undefined;

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getEmployee();
  }

  private getEmployee() {
    this.authService
      .findUserById(Number(localStorage.getItem('userId')))
      .subscribe(
        (data) => {
          this.user = data;
          this.userType = this.user.result.userType;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
