import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-edit-subtask',
  templateUrl: './edit-subtask.component.html',
  styleUrls: ['./edit-subtask.component.css'],
})
export class EditSubtaskComponent {
  comment: string | undefined;
  progressPercentage: number | undefined;
  errorSign: boolean = false;

  constructor(private projectService: ProjectService, private router: Router) {}

  onSubmit(): void {
    console.log('submitted');
    this.projectService
      .updateSubTaskProgress(
        Number(localStorage.getItem('subtaskId')),
        this.progressPercentage,
        this.comment
      )
      .subscribe(
        (data) => {
          console.log(data);
          this.router.navigate(['/subtask']);
        },
        (error) => {
          console.log(error);
          this.errorSign = true;
        }
      );
  }
}
