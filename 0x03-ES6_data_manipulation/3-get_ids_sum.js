export default function getStudentIdsSum(x) {
  const sum = x.reduce((acc, val) => acc + val.id, 0);
  return sum;
}
