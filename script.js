"use strict";
// const jsonData = require("./data.json");
// import jsonData from "./data.json" assert { type: "json" };
// implemented fetch so that frontend works in all the browsers
let jsonData;

fetch("./data.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    jsonData = data;
    init();
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

function init() {
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
  //list all vegs
  const vegBtn = document.getElementById("vegetableBtn");
  vegBtn.addEventListener("click", () => {
    const Vegetables = objectSelector("category", "Vegetable", jsonData);
    tableBuilder(Vegetables);
  });
  //list all fruit
  const frtBtn = document.getElementById("fruitsBtn");
  frtBtn.addEventListener("click", () => {
    const fruits = objectSelector("category", "Fruit", jsonData);
    tableBuilder(fruits);
  });
  //list all protine
  const proBtn = document.getElementById("protineBtn");
  proBtn.addEventListener("click", () => {
    const Proteins = objectSelector("category", "Protein", jsonData);
    tableBuilder(Proteins);
  });
  //list all nuts
  const nuBtn = document.getElementById("nutsBtn");
  nuBtn.addEventListener("click", () => {
    const Nuts = objectSelector("category", "Nuts", jsonData);
    tableBuilder(Nuts);
  });
  // list all grain
  const grBtn = document.getElementById("grainBtn");
  grBtn.addEventListener("click", () => {
    const Grains = objectSelector("category", "Grain", jsonData);
    tableBuilder(Grains);
  });
  //list all dairy
  const darBtn = document.getElementById("dairyBtn");
  darBtn.addEventListener("click", () => {
    const Dairy = objectSelector("category", "Dairy", jsonData);
    tableBuilder(Dairy);
  });
  //load all cal above 100
  const sortAboveBtn = document.getElementById("calSort>100Btn");
  sortAboveBtn.addEventListener("click", () => {
    const calAbove100 = objectSelector("calorie", 100, jsonData, ">");
    tableBuilder(calAbove100);
  });
  //load all cal above 100
  const sortBelowBtn = document.getElementById("calSort<100Btn");
  sortBelowBtn.addEventListener("click", () => {
    const calbelow100 = objectSelector("calorie", 100, jsonData, "<");
    tableBuilder(calbelow100);
  });
  //load decending order by protien
  const desBtn = document.getElementById("desProtien");
  desBtn.addEventListener("click", () => {
    const decProtien = objectSorter("protiens", "descending", jsonData);
    tableBuilder(decProtien);
  });
  //load ascending order by cab
  const ascCabBtn = document.getElementById("ascCab");
  ascCabBtn.addEventListener("click", () => {
    const ascCab = objectSorter("cab", "ascending", jsonData);
    tableBuilder(ascCab);
  });
}
