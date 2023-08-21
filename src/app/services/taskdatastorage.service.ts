import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root',
})
export class TaskdatastorageService {
  private data: any;

  setData(taskObj: Task) {
    sessionStorage.setItem('tid', JSON.stringify(taskObj));
  }

  getData(): any {
    return sessionStorage.getItem('tid');
  }

  constructor() {}
}
