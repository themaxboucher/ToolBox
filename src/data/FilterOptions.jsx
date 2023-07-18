export const priceOptions = ["All", "Free", "Paid"];
export const categoryOptions = [
  "Featured",
  "Chat",
  "Writing",
  "Image",
  "Video",
  "Audio",
  "Code",
  "SMM",
  "SEO",
];

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
