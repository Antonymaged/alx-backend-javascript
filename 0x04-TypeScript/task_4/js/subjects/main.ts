import { Subject } from './Cpp.ts';
import { Subject as Java } from './Java.ts';
import { Subject as React } from './React.ts';

export const cpp = new Subject.cpp();
export const java = new Java.Java();
export const react = new React.React();
export const cTeacher:Subjects.Teacher = {
  firstName: 'Antony',
  lastName: 'Maged',
  experienceTeachingC = 10,
};

console.log('C++');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log('Java');
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

console.log('React');
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
