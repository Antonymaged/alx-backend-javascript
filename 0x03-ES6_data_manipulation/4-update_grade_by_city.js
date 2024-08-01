export default function updateStudentGradeByCity(list, city, newGrades) {
  const fil = list.filter((stu) => stu.location === city);
  const gra = fil.map((stu) => {
    for (const gradein of newGrades) {
      if (stu.id === gradein.id) {
        stu.grade = gradein.grade; // eslint-disable-line no-param-reassign
      }
    }
    if (stu.grade === undefined) {
      stu.grade = 'N/A'; // eslint-disable-line no-param-reassign
    }
    return stu;
  });

  return gra;
}
