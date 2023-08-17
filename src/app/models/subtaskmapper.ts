import { Employee } from './employee';

export class Subtaskmapper {
  constructor(
    public subTaskTitle?: string,
    public startDate?: Date,
    public dueDate?: Date,
    public employeeId?: Employee,
    public subTaskDescription?: string
  ) {}
}
