import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Projectmember } from '../../models/projectmember';
import { MatSort } from '@angular/material/sort';
import { ProjectmemberService } from '../../services/projectmember.service';

@Component({
  selector: 'app-viewmembers',
  templateUrl: './viewmembers.component.html',
  styleUrls: ['./viewmembers.component.css'],
})
export class ViewmembersComponent implements OnInit {
  displayedColumns: string[] = ['name', 'username'];
  dataSource: any;
  projectId: number | undefined;
  projectMembers = new Array<Projectmember>();

  @ViewChild(MatSort, { static: false })
  sort: any;

  constructor(private projectMemberService: ProjectmemberService) {}

  ngOnInit() {
    //this.projectId = Number(sessionStorage.getItem('pid'));
    this.projectId = 1;
    this.dataSource.sort = this.sort;

    // this.projectMemberService.findProjectMember().subscribe(response => {
    //   this.projectMembers = response;
    //   this.dataSource = new MatTableDataSource(this.projectMembers);
    // });

    this.projectMemberService
      .getProjectMembers(this.projectId)
      .subscribe((response) => {
        console.log(response);

        this.projectMembers = response;
        this.dataSource = new MatTableDataSource(this.projectMembers);
      });
  }
}
