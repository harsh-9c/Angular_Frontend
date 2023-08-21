import { Employee } from './employee';

export class Project {
  projectId: number | undefined;
  name: string | undefined;
  startDate: string | undefined;
  endDate: string | undefined;
  managerId: Employee | undefined;
  budget: number | undefined;
  isCompleted: boolean | undefined;
  githubLink: string | undefined;

  constructor(
    projectId?: number,
    name?: string,
    startDate?: string,
    endDate?: string,
    managerId?: Employee,
    budget?: number,
    isCompleted?: boolean,
    githubLink?: string
  ) {
    this.projectId = projectId;
    this.name = name;
    this.startDate = startDate;
    this.endDate = endDate;
    this.managerId = managerId;
    this.budget = budget;
    this.isCompleted = isCompleted;
    this.githubLink = githubLink;
  }
}
