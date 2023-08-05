export const priceOptions = ["All", "Free", "Paid"];
export const categoryOptions = sortArrayWithFirstElement([
  "Featured",
  "Chat",
  "Writing",
  "Image Generation",
  "Video",
  "Audio",
  "Podcast",
  "Code",
  "Website",
  "SMM",
  "SEO",
  "API",
  "Meeting",
  "Marketing",
  "CRM",
]);

// Sort categoryOptions by alphabetical order but keep "Featured" as the first option
function sortArrayWithFirstElement(arr) {
  const firstElement = arr[0];
  const restOfArray = arr.slice(1);

  restOfArray.sort(); // Sort the rest of the array

  // Insert the first element back at the beginning of the sorted array
  restOfArray.unshift(firstElement);

  return restOfArray;
}

// filterArray is an array of arrays that together contain objects with all the different filter combinations
const filterArray = priceOptions.map((priceOption) => {
  return categoryOptions.map((categoryOption) => ({
    priceFilter: priceOption,
    categoryFilter: categoryOption,
  }));
});

export const possibleFilterCombos = [];
let i = 0;
while (i < filterArray.length) {
  possibleFilterCombos.push(...filterArray[i]);
  i++;
}
