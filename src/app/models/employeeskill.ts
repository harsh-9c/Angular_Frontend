import { Employee } from './employee';
import { Skills } from './skills';

export class Employeeskill {
  employeeId: Employee | undefined;
  skillId: Skills | undefined;

  constructor(employeeId?: Employee, skillId?: Skills) {
    this.employeeId = employeeId;
    this.skillId = skillId;
  }
}
