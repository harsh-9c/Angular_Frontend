export class Employee {
  employeeId: number | undefined;
  firstName: string | undefined;
  lastName: string | undefined;
  middleName: string | undefined;
  username: string | undefined;
  password: string | undefined;
  userType: string | undefined;
  availability: boolean | undefined;
  eulAgreement: boolean | undefined;

  constructor(
    employeeId?: number,
    firstName?: string,
    lastName?: string,
    middleName?: string,
    username?: string,
    password?: string,
    userType?: string,
    availability?: boolean,
    eulAgreement?: boolean
  ) {
    this.employeeId = employeeId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.middleName = middleName;
    this.username = username;
    this.password = password;
    this.userType = userType;
    this.availability = availability;
    this.eulAgreement = eulAgreement;
  }
}
