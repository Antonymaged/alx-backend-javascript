interface Student{
    firstName:string,
    lastName:string,
    age:number,
    location:string
}

let fs: Student = {
    firstName:"Antony",
    lastName:"Maged",
    age:19,
    location:"EGYPT, Cairo",
};
let ss:Student = {
    firstName:"Fahd",
    lastName:"Ahmed",
    age:22,
    location:"EGYPT, Cairo",
};
let studentsList:Student[] = [fs, ss];

const table = document.createElement('table');


studentsList.forEach((student) => {
    const row = table.insertRow();
    const firstNameCell = row.insertCell(0);
    const locationCell = row.insertCell(1);
    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
});

document.body.appendChild(table);
