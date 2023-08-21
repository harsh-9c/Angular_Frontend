import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Projectmember } from '../models/projectmember';

@Injectable({
  providedIn: 'root',
})
export class ProjectmemberService {
  private projectMemberUrl: string;
  private allProjectMemberUrl: string;
  private assignedMemberUrl: string;
  private findProjectlByEmpIdURL: string;

  constructor(private http: HttpClient) {
    this.projectMemberUrl =
      'http://localhost:9501/projectMember/saveProjectMember';
    this.assignedMemberUrl =
      'http://localhost:9999/MANAGER-SERVICE/projectMember/getAllMembersOfAProject';
    this.allProjectMemberUrl =
      'http://localhost:9999/MANAGER-SERVICE/projectMember/getProjectMember';
    //this.findProjectlByEmpIdURL = 'http://localhost:9000/ADMIN-VIEW-SERVICE/api/v1/getteams';
    this.findProjectlByEmpIdURL =
      'http://localhost:9999/ADMIN-SERVICE/api/v1//project_members/getEmp';
  }

  public getProjectMembers(project: number): Observable<Projectmember[]> {
    return this.http.get<Projectmember[]>(
      this.assignedMemberUrl + '/' + project
    );
  }

  public save(projectMember: Projectmember) {
    return this.http.post<Projectmember>(this.projectMemberUrl, projectMember);
  }

  public findProjectMember(): Observable<Projectmember[]> {
    return this.http.get<Projectmember[]>(this.allProjectMemberUrl);
  }
  public findProjectByEmpId(id: number): Observable<Projectmember[]> {
    return this.http.get<Projectmember[]>(
      this.findProjectlByEmpIdURL + '/' + id
    );
  }
}
