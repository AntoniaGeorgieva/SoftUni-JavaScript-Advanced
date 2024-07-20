function rectangle(width, height, color) {
  const capitalizedColor = color.charAt(0).toUpperCase() + color.slice(1);
  let rect = {
    'width': width,
    'height': height,
    'color': capitalizedColor,
    'calcArea': function () {
      return this.width * this.height;
    }
  }
  return rect;
}