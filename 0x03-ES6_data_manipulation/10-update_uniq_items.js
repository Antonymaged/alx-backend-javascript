export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }
  const m = new Map();
  for (const [key, value] of map.entries()) {
    if (value === 1) {
      m.set(key, 100);
    } else {
      m.set(key, value);
    }
  }
  return m;
}
