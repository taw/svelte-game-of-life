function countNeighbours(cells, cx, cy) {
  let count = 0;
  for(let {x,y,state} of cells) {
    if (!state) {
      continue
    }
    let dx = Math.abs(x - cx)
    let dy = Math.abs(y - cy)
    if (Math.max(dx, dy) == 1) {
      count += 1;
    }
  }
  return count;
}

function runStep(cells) {
  let nextCells = [];
  for(let {x,y,state} of cells) {
    let n = countNeighbours(cells, x, y);
    let nextState = (n == 3 || (state && n == 2));
    nextCells.push({x, y, state: nextState})
  }
  return nextCells;
}

export {runStep}
