let main_table = document.querySelector("#main-table");
let tree = [];
let line = "";

let data = localStorage.getItem("data");
data = data.split(" ").map((item) => {
  return +item;
});
console.log(data);
tree[1] = data[0];
// function init
function insertIntoArray(tree, item, index) {
  if (!tree[index]) {
    tree[index] = item;
    return;
  }
  if (tree[index] < item) {
    insertIntoArray(tree, item, index * 2 + 1);
  } else {
    insertIntoArray(tree, item, index * 2);
  }
}

function inorder(tree, index) {
  if (index <= tree.length && tree[index]) {
    inorder(tree, index * 2);
    line += tree[index] + " ";
    inorder(tree, index * 2 + 1);
  }
}

function depthTree(tree, index) {
  if (index >= tree.length || !tree[index]) {
    return 0;
  }
  let depthLeft = depthTree(tree, index * 2);
  let depthRight = depthTree(tree, index * 2 + 1);
  return Math.max(depthLeft, depthRight) + 1;
}

for (let index = 1; index < data.length; index++) {
  insertIntoArray(tree, data[index], 1);
}
let height = depthTree(tree, 1);
const rows = [];
for (let index = 0; index < height; index++) {
  let row = document.createElement("tr");
  row.className = "row";
  for (let j = 0; j < height * 2 + 1; j++) {
    let td = document.createElement("td");
    td.className = "field";
    row.appendChild(td);
  }
  main_table.appendChild(row);
  rows[index] = row;
}

console.log(rows[0]);
