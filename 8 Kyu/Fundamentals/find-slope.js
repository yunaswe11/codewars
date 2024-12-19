

// Given an array of 4 integers
// [a,b,c,d] representing two points (a, b) and (c, d), return a string representation of the slope of the line joining these two points.
// For an undefined slope (division by 0), return undefined . Note that the "undefined" is case-sensitive.

// My answer (O)

function slope(points) {
  let numerator = points[3] - points[1]
  let denominator = points[2] - points[0]
  
  if (denominator === 0) {
    return 'undefined'
  } else {
    return String(numerator / denominator)
  }
}

// Other answers

function slope(points) {
  let dx = points[2] - points[0],
      dy = points[3] - points[1]
      
  if (dx == 0)
    return 'undefined'
  
  return (dy/dx) + ''
}


const slope = (points) => {
  const y = points[3] - points[1];
  const x = points[2] - points[0];
  let res = (y / x);
  return points[0] == points[2] ? 'undefined' : res.toString();
};