import { Project } from './project';

export class Task {
  constructor(
    public taskId?: number,
    public projectId?: Project,
    public taskTitle?: string,
    public startDate?: Date,
    public description?: string,
    public dueDate?: Date,
    public subTaskCount?: number,
    public progress?: number
  ) {}
}
