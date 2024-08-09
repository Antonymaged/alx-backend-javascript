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

function printTeacher(firstName: string, lastName: string):string {
  const fl = firstName.split("")[0];
  return `${fl}. ${lastName}`;
}
