import { Project } from './project';
import { Employee } from './employee';

export class Projectmember {
  projectId: Project | undefined;
  employeeId: Employee | undefined;
  authority: boolean | undefined;

  constructor(projectId?: Project, employeeId?: Employee, authority?: boolean) {
    this.projectId = projectId;
    this.employeeId = employeeId;
    this.authority = authority;
  }
}
