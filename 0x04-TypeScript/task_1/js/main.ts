interface Teacher {
  readonly firstName: string,
  readonly lastName: string,
  fullTimeEmployee: boolean,
  yearsOfExperience: number,
  location: string,
  [key: string]: unknown,
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacher {
  (firstName: string, secondName: string): string;
}

class StudentClass {
  firstName: string;
  lastName: string;
  constructor(firstName: string, lastName: string){
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework() {
    return 'Currently working';
  }

  displayName() {
    return this.firstName;
  }
}

interface Studenconstructor {
  new(firstName: string, lastName: string): StudentClass;
}

interface Studentclass {
  workOnHomework(): string;
  displayName(): string;
}

function printTeacher(firstName: string, lastName: string):string {
  const fl = firstName.split("")[0];
  return `${fl}. ${lastName}`;
}
