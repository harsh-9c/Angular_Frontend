import { Employee } from './employee';

export class Project {
  constructor(
    public projectId: number,
    public name: string,
    public startDate: string,
    public endDate: string,
    public managerId: Employee,
    public budget: number,
    public isCompleted: boolean,
    public githubLink: string
  ) {}
}
