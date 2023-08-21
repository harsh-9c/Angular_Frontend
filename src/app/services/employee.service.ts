import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';
import { HttpClient } from '@angular/common/http';
import { Projectmember } from '../models/projectmember';
import { Employeeskill } from '../models/employeeskill';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private employeeUrl;
  private memberUrl;
  dataTosearch: string | undefined;
  private managerURL: string;
  employeeURL: string;
  private skilledEmployeeURL: string;
  receivedFilter: EventEmitter<string>;
  private results: Observable<Employee[]> | undefined;

  constructor(private http: HttpClient) {
    this.employeeUrl = 'http://localhost:9100/api/v1';
    this.memberUrl = 'http://localhost:9100/api/v1/getteams';
    this.managerURL =
      'http://localhost:9999/MANAGER-SERVICE/employee/getManagersByAvailability';
    this.skilledEmployeeURL =
      'http://localhost:9999/MANAGER-SERVICE/employeeSkill/getEmployeesBySkills';
    this.employeeURL =
      'http://localhost:9999/MANAGER-SERVICE/employee/getMembersByAvailability';

    this.receivedFilter = new EventEmitter<string>();
  }

  public getAllEmployee(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.employeeUrl + '/employees/findAll');
  }

  public getEmployeeData(searchData: string): Observable<Employee[]> {
    const url = `${this.employeeUrl}/${searchData}`;
    let value = this.http.get<Employee[]>(url);
    console.log(value);
    return value;
  }

  raiseEvent(dataTosearch: string): void {
    this.dataTosearch = dataTosearch;
    this.receivedFilter.emit(dataTosearch);
  }

  public getEmployeeDetails(empid: number): Observable<Projectmember[]> {
    const url = `${this.memberUrl}/${empid}`;
    return this.http.get<Projectmember[]>(url);
  }

  public getEmployeeSkills(empid: number): Observable<Employeeskill[]> {
    const skills = 'skills';
    const url = `${this.memberUrl}/${skills}/${empid}`;
    return this.http.get<Employeeskill[]>(url);
  }

  public findAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.managerURL);
  }

  public findSkilledEmployee(skill: String): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.skilledEmployeeURL + '/' + skill);
  }
}
