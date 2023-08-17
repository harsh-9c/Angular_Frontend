import { Employee } from './employee';
import { Project } from './project';

export class Projectmembers {
  constructor(
    public projectId?: Project,
    public employeeId?: Employee,
    public authority?: boolean
  ) {}
}
