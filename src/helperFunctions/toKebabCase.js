function toKebabCase(inputString) {
  // Remove any leading/trailing spaces and convert to lowercase
  const trimmedString = inputString.trim().toLowerCase();

  // Replace spaces, underscores, and camel case with hyphens
  const kebabCaseString = trimmedString.replace(
    /\s+|_+|([a-z])([A-Z])/g,
    (_, g1, g2) => {
      return g1 ? `${g1}-${g2}` : "-";
    }
  );

  return kebabCaseString;
}

export default toKebabCase;