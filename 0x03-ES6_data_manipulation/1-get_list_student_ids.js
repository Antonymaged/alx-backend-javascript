export default function getListStudentIds(z) {
  if (!Array.isArray(z)) {
    return [];
  }
  const id = z.map((obj) => obj.id);
  return id;
}
