import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private baseURL = 'http://localhost:9999/ADMIN-SERVICE/api/v1';

  private managerURL = 'http://localhost:9501/subtask/SubTaskByTaskId';

  private projectManagementURL =
    'http://localhost:9999/PROJECT-MANAGEMENT/api/updateProgress/';

  private projectManagementURL2 = 'http://localhost:8000/api/updateProgress/';

  constructor(private httpClient: HttpClient) {}

  //Get all projects
  getAllProjectDetails(): Observable<Object> {
    return this.httpClient.get(`${this.baseURL}` + '/projects/findAll');
  }

  //Find completed projects
  getAllCompletedProjects(): Observable<Object> {
    return this.httpClient.get(`${this.baseURL}` + '/projects/completed');
  }

  //Find ongoing projects
  getAllOngoingProjects(): Observable<Object> {
    return this.httpClient.get(`${this.baseURL}` + '/projects/ongoing');
  }

  //Find project by id
  getProjectById(id: number): Observable<Object> {
    return this.httpClient.get(
      `${this.baseURL}` + '/projects/findById/' + `${id}`
    );
  }

  // //Get project detail from mongoDB
  // findMongoData(): Observable<Object> {
  //   return this.httpClient.get(`${this.baseURL}` + '');
  // }

  // Get ongoing projects by year
  getOngoingProjectByYear(year: number): Observable<Object> {
    return this.httpClient.get(
      `${this.baseURL}` + '/projects/ongoing/' + `${year}`
    );
  }

  // Get ongoing projects by year
  getCompletedProjectByYear(year: number): Observable<Object> {
    return this.httpClient.get(
      `${this.baseURL}` + '/projects/completed/' + `${year}`
    );
  }

  // Find employee by username
  getEmployeeByUserName(username: string): Observable<Object> {
    return this.httpClient.get(`${this.baseURL}` + username);
  }

  // Create new project
  public save(project: Project): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}` + '/projects/save', project);
  }

  // Get task by id
  public getTaskByProjectId(id: number): Observable<Object> {
    return this.httpClient.get(`${this.baseURL}` + '/tasks/' + `${id}`);
  }

  // Get subtask by id
  public getSubTaskByTaskId(id: number): Observable<Object> {
    return this.httpClient.get(`${this.managerURL}` + '/' + `${id}`);
  }

  // Update subtask progress
  public updateSubTaskProgress(
    id: number | undefined,
    progress: number | undefined,
    comment: string | undefined
  ): Observable<any> {
    console.log(id, progress, comment);

    return this.httpClient.put(
      `${this.projectManagementURL2}` +
        `${id}` +
        '/' +
        `${progress}` +
        '/' +
        `${comment}`,
      {},
      { responseType: 'text' }
    );
  }
}
