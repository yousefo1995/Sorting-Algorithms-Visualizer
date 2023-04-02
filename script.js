let btnRandom = document.getElementById("random-btn");
let btnSolve = document.getElementById("solve-btn");
let arrayLength = document.getElementById("array-Length");
let chart = document.getElementById("chart");
let generatedArray = [];

btnRandom.addEventListener("click", () => {
  generatedArray = generateRandomArray();
  showBars();
  console.log(generatedArray);
});
btnSolve.addEventListener("click", () => {
  solve(generatedArray);
  // showBars();
  console.log(solve(generatedArray));
});

const generateRandomArray = () => {
  generatedArray = [];
  const length = arrayLength.value;
  for (i = 0; i < length; i++) {
    generatedArray.push(Math.floor(Math.random() * 100));
  }
  return generatedArray;
};

async function solve() {
  for (var i = 0; i < generatedArray.length - 1; i++) {
    let swapped = false;
    for (var j = 0; j < generatedArray.length - 1; j++) {
      if (generatedArray[j] > generatedArray[j + 1]) {
        var temp = generatedArray[j];
        generatedArray[j] = generatedArray[j + 1];
        generatedArray[j + 1] = temp;
        await animateBars(j, j + 1);
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }
  // return array;
}

const showBars = () => {
  chart.innerHTML = "";
  for (let i = 0; i < generatedArray.length; i++) {
    const insertBars = document.createElement("div");
    // const num = document.createElement("label");
    insertBars.classList.add("bar");
    insertBars.style.height = `${generatedArray[i] * 5}px`;
    // num.innerText = generatedArray[i];
    // insertBars.appendChild(num);
    chart.appendChild(insertBars);
  }
};
async function animateBars(index1, index2) {
  const bar1 = chart.children[index1];
  const bar2 = chart.children[index2];
  bar1.style.backgroundColor = "red";
  bar2.style.backgroundColor = "red";
  await sleep(500);
  const temp = bar1.style.height;
  bar1.style.height = bar2.style.height;
  bar2.style.height = temp;
  bar1.style.backgroundColor = "#4CAF50";
  bar2.style.backgroundColor = "#4CAF50";
  await sleep(500);
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
