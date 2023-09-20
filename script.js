"use strict";
const jsonData = require("./data.json");

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

// calculating all the food items with category vegitables
let Vegetables = objectSelector("category", "Vegetable", jsonData);
// calculating all the food items with category fruits
let fruits = objectSelector("category", "Fruit", jsonData);
// calculating all the food items with category Protein
let Proteins = objectSelector("category", "Protein", jsonData);
// calculating all the food items with category Nuts
let Nuts = objectSelector("category", "Nuts", jsonData);
// calculating all the food items with category Grains
let Grains = objectSelector("category", "Grain", jsonData);
// calculating all the food items with category Dairy
let Dairy = objectSelector("category", "Dairy", jsonData);
//For sorting food items Caloury above 100
let calAbove100 = objectSelector("calorie", 100, jsonData, ">");
// For sorting food items Caloury below 100
let calbelow100 = objectSelector("calorie", 100, jsonData, "<");
// All sorted food items with highest protien content to lowest
let decProtien = objectSorter("protiens", "descending", jsonData);
// All sorted food items with lowest cab content to highest
let ascCab = objectSorter("cab", "ascending", jsonData);

//log section
// Listing all the food items
console.log("Here are all the food items :");
console.log(listAllItems(jsonData));
// Listing all the food items with category vegitables
console.log("Here are all the food items in vegetable category :");
console.log(listAllItems(Vegetables));
// Listing all the food items with category fruits
console.log("Here are all the food items in Fruits category :");
console.log(listAllItems(fruits));
// Listing all the food items with category Protein
console.log("Here are all the food items in Proteins category :");
console.log(listAllItems(Proteins));
// Listing all the food items with category Nuts
console.log("Here are all the food items in Nuts category :");
console.log(listAllItems(Nuts));
// Listing all the food items with category Grains
console.log("Here are all the food items in Grains category :");
console.log(listAllItems(Grains));
// Listing all the food items with category Dairy
console.log("Here are all the food items in Dairy category :");
console.log(listAllItems(Dairy));
//For food items Caloury above 100
console.log("all items with calorie above 100");
console.log(listAllItems(calAbove100));
// For food items Caloury below 100
console.log("All items with calorie below 100");
console.log(listAllItems(calbelow100));
// All the food items with highest protien content to lowest
console.log("food items in descending order per Protien");
console.log(listAllItems(decProtien));
// All the food items with lowest cab content to highest
console.log("food items in ascending order per Cab");
console.log(listAllItems(ascCab));
