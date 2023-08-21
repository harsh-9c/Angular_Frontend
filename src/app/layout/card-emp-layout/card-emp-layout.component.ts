import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-card-emp-layout',
  templateUrl: './card-emp-layout.component.html',
  styleUrls: ['./card-emp-layout.component.css'],
})
export class CardEmpLayoutComponent {
  empName: string;

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authService
      .findUserById(Number(localStorage.getItem('userId')))
      .subscribe(
        (data) => {
          console.log(data);
          this.empName = JSON.parse(JSON.stringify(data)).result.firstName;
          this.empName +=
            ' ' + JSON.parse(JSON.stringify(data)).result.lastName;
          console.log(this.empName);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
