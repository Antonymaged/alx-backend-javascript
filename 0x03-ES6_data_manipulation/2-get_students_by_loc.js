export default function getStudentsByLocation(lis, city) {
  const arr = lis.filter((obj) => obj.location === city);
  return arr;
}
