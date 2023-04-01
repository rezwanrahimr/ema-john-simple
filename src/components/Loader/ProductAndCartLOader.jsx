export const ProductAndCartLoader = async () => {
  const res = await fetch(
    "https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON"
  );
  const data = res.json();

  return data;
};
