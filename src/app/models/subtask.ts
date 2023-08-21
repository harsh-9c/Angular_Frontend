import { Employee } from './employee';

export class Subtask {
  subTaskId: number | undefined;
  taskId: number | undefined;
  employeeId: Employee | undefined;
  subTaskTitle: string | undefined;
  comment: string | undefined;
  subTaskDescription: string | undefined;
  startDate: Date | undefined;
  dueDate: Date | undefined;
  progressPercentage: number | undefined;

  constructor(
    subTaskId?: number,
    subTaskTitle?: string,
    subTaskDescription?: string,

    startDate?: Date,
    dueDate?: Date,
    progressPercentage?: number,
    comment?: string,
    employeeId?: Employee,
    taskId?: number
  ) {
    this.subTaskId = subTaskId;
    this.taskId = taskId;
    this.employeeId = employeeId;
    this.subTaskTitle = subTaskTitle;
    this.comment = comment;
    this.subTaskDescription = subTaskDescription;
    this.startDate = startDate;
    this.dueDate = dueDate;
    this.progressPercentage = progressPercentage;
  }
}
