let btnRandom = document.getElementById("random-btn");
let btnSolve = document.getElementById("solve-btn");
let arrayLength = document.getElementById("array-Length");
let chart = document.getElementById("chart");
let generatedArray = [];

generateRandomArray();

btnRandom.addEventListener("click", () => {
  generateRandomArray();
});
btnSolve.addEventListener("click", () => {
  solve(generatedArray);
});

function generateRandomArray() {
  generatedArray = [];
  const length = arrayLength.value;
  for (i = 0; i < length; i++) {
    generatedArray.push(Math.floor(Math.random() * 100));
  }
  showBars();
}

async function solve(array) {
  for (var i = 0; i < array.length - 1; i++) {
    for (var j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        var temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        await animateBars(j, j + 1);
      }
    }
  }
}

function showBars() {
  chart.innerHTML = "";
  for (let i = 0; i < generatedArray.length; i++) {
    const insertBars = document.createElement("div");
    const num = document.createElement("label");
    insertBars.classList.add("bar");
    insertBars.style.height = `${generatedArray[i] * 5}px`;
    num.innerText = generatedArray[i];
    insertBars.appendChild(num);
    chart.appendChild(insertBars);
  }
}
async function animateBars(index1, index2) {
  const bar1 = chart.children[index1];
  const bar2 = chart.children[index2];
  bar1.style.backgroundColor = "red";
  bar2.style.backgroundColor = "red";
  await sleep(500);
  const temp = bar1.style.height;
  bar1.style.height = bar2.style.height;
  bar2.style.height = temp;

  const temp2 = bar1.innerHTML;
  bar1.innerHTML = bar2.innerHTML;
  bar2.innerHTML = temp2;

  bar1.style.backgroundColor = "green";
  bar2.style.backgroundColor = "green";
  await sleep(500);
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
