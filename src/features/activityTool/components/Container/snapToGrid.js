export function snapToGrid(x, y) {
  //Evite les dixieme dans les coordonnees
  const snappedX = Math.round(x / 32) * 32;
  const snappedY = Math.round(y / 32) * 32;
  return [snappedX, snappedY];
}
