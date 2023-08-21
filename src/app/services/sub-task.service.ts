import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subtask } from '../models/subtask';

@Injectable({
  providedIn: 'root',
})
export class SubTaskService {
  private subUrl: string;
  private subTaskUrl: string;
  private saveSubTaskUrl: string;

  constructor(private http: HttpClient) {
    this.subUrl = 'http://localhost:9999/ADMIN-SERVICE/api/getsubtasks';
    this.subTaskUrl =
      'http://localhost:9999/MANAGER-SERVICE/subtask/SubTaskByTaskId';
    this.saveSubTaskUrl = 'http://localhost:9501/subtask/SubTask';
  }

  public getSubtask(pid: number, tid: number): Observable<Subtask[]> {
    const url = `${this.subUrl}/${pid}/${tid}`;
    console.log(url);
    return this.http.get<Subtask[]>(url);
  }

  public findSubTask(taskId: number): Observable<Subtask[]> {
    return this.http.get<Subtask[]>(this.subTaskUrl + '/' + taskId);
  }

  public save(subtask: Subtask) {
    return this.http.post<Subtask>(this.saveSubTaskUrl, subtask);
  }
}
