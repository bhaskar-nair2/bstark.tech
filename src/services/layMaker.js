function layMaker() {
  var boxes = [];
  const area = ["col1", "col2", "col3"];
  const type = ["box1", "box2", "box3"];
  const count = { t3: 3, t2: 6, t1: 9 };
  const justify = ["baseline", "center", "end"];
  const align = ["baseline", "center", "end"];
  const poses = [];
  for (al of align) {
    for (js of justify) {
      poses.push({
        "align-self": al,
        "justify-self": js
      });
    }
  }

  for (ar of area) {
    var pos = poses;
    boxes.push({
      ...pos.pop(getRandom(pos))
    });
  }

  function getRandom(arr) {
    return arr[Math.abs(Math.floor(Math.random() * arr.length))];
  }

  return boxes;
}

// export default layMaker;

console.log(layMaker());
