import { Employee } from './employee';

export class Subtask {
  constructor(
    public subTaskTitle?: string,
    public subTaskDescription?: string,
    public startDate?: Date,
    public dueDate?: Date,
    public progressPercentage?: number,
    public comment?: string,
    public employeeId?: Employee,
    public taskId?: number
  ) {}
}
