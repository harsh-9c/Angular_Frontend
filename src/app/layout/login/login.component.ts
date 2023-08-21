import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ProjectService } from 'src/app/services/project.service';
import { ProjectmemberService } from 'src/app/services/projectmember.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  user: User = new User();
  errorSign: boolean = false;
  userData: any;
  a: boolean = true;
  projects: any;
  members: any;

  constructor(
    private authService: AuthenticationService,
    private projectService: ProjectService,
    private projectMemberService: ProjectmemberService,
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

        this.projectMemberService.getAllMembers().subscribe(
          (data) => {
            console.log(data);
            this.members = JSON.parse(JSON.stringify(data));
            console.log(this.members.length);

            for (var i = 0; i < this.members.length; i++) {
              console.log(this.members[i].employeeId);
              if (
                Number(this.members[i].employeeId.employeeId) ===
                Number(localStorage.getItem('userId'))
              ) {
                localStorage.setItem(
                  'projectId',
                  this.members[i].projectId.projectId
                );
                console.log(this.members[i].projectId);
                break;
              }
            }
          },
          (error) => {
            console.log(error);
          }
        );

        // this.projectService.getAllProjectDetails().subscribe(
        //   (data) => {
        //     console.log(data);
        //     this.projects = JSON.parse(JSON.stringify(data));
        //     for (var i = 0; i < this.projects.length; i++) {
        //       if (
        //         Number(localStorage.getItem('userId')) ===
        //         Number(this.projects[i].manager.employeeId)
        //       ) {
        //         localStorage.setItem('projectId', this.projects[i].projectId);
        //         console.log(this.projects[i].projectId);

        //         break;
        //       }
        //       console.log(this.projects[i].manager.employeeId);
        //     }
        //   },
        //   (error) => {
        //     console.log(error);
        //   }
        // );

        if (this.userData.status == 200) {
          this.router.navigate(['/sidenav']);
        } else if (this.userData.status == 202) {
          this.router.navigate(['/manager']);
        } else {
          this.a = false;
          if (this.a === false) {
            console.log('Hello');
            this.router.navigate(['/card-emp-layout']);
          }

          // this.router.navigate(['/employee']);
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
