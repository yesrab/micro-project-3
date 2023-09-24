"use strict";
// const jsonData = require("./data.json");
import jsonData from "./data.json" assert { type: "json" };

function listAllItems(array) {
  array.forEach((items) => {
    console.log(items);
  });
}

function objectSelector(typeOfKey, requestedValue, array, thanSymbol = "==") {
  return array.filter((object) => {
    if (thanSymbol === "==") {
      return object[typeOfKey] === requestedValue;
    } else if (thanSymbol === "<") {
      return object[typeOfKey] < requestedValue;
    } else if (thanSymbol === ">") {
      return object[typeOfKey] > requestedValue;
    }
  });
}

function objectSorter(category, order, array) {
  let sortedArray = [...array];
  return sortedArray.sort((x, y) => {
    if (order == "ascending") {
      if (x[category] > y[category]) return 1;
      if (x[category] < y[category]) return -1;
      return 0;
    } else if (order == "descending") {
      if (x[category] > y[category]) return -1;
      if (x[category] < y[category]) return 1;
      return 0;
    } else {
      console.log(
        "please provide an sort order \n note: the sort order has to be either ascending or descending"
      );
    }
  });
}

function tableBuilder(array) {
  let tableRow = document.getElementById("generatedTable");
  let row = ``;
  tableRow.innerHTML = "";
  array.forEach((object) => {
    row = `<tr>
    <td>${object.id}</td>
    <td>${object.foodname}</td>
    <td>${object.calorie}</td>
    <td>${object.category}</td>
    <td>${object.protiens}</td>
    <td>${object.cab}</td>
    </tr>`;
    tableRow.innerHTML += row;
  });
}
//load table by default
tableBuilder(jsonData);
//load all food contents
const allFoodbtn = document.getElementById("allFood");
allFoodbtn.addEventListener("click", () => {
  tableBuilder(jsonData);
});
const vegBtn = document.getElementById("vegetableBtn");
vegBtn.addEventListener("click", () => {
  const Vegetables = objectSelector("category", "Vegetable", jsonData);
  tableBuilder(Vegetables);
});
const frtBtn = document.getElementById("fruitsBtn");
frtBtn.addEventListener("click", () => {
  const fruits = objectSelector("category", "Fruit", jsonData);
  tableBuilder(fruits);
});

const proBtn = document.getElementById("protineBtn");
proBtn.addEventListener("click", () => {
  const Proteins = objectSelector("category", "Protein", jsonData);
  tableBuilder(Proteins);
});

const nuBtn = document.getElementById("nutsBtn");
nuBtn.addEventListener("click", () => {
  const Nuts = objectSelector("category", "Nuts", jsonData);
  tableBuilder(Nuts);
});

const grBtn = document.getElementById("grainBtn");
grBtn.addEventListener("click", () => {
  const Grains = objectSelector("category", "Grain", jsonData);
  tableBuilder(Grains);
});

const darBtn = document.getElementById("dairyBtn");
darBtn.addEventListener("click", () => {
  const Dairy = objectSelector("category", "Dairy", jsonData);
  tableBuilder(Dairy);
});
const sortAboveBtn = document.getElementById("calSort>100Btn");
sortAboveBtn.addEventListener("click", () => {
  const calAbove100 = objectSelector("calorie", 100, jsonData, ">");
  tableBuilder(calAbove100);
});
const sortBelowBtn = document.getElementById("calSort<100Btn");
sortBelowBtn.addEventListener("click", () => {
  const calbelow100 = objectSelector("calorie", 100, jsonData, "<");
  tableBuilder(calbelow100);
});

const desBtn = document.getElementById("desProtien");
desBtn.addEventListener("click", () => {
  const decProtien = objectSorter("protiens", "descending", jsonData);
  tableBuilder(decProtien);
});
const ascCabBtn = document.getElementById("ascCab");
ascCabBtn.addEventListener("click", () => {
  const ascCab = objectSorter("cab", "ascending", jsonData);
  tableBuilder(ascCab);
});
