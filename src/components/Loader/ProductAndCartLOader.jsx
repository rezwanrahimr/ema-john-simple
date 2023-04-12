import { getStorageData } from "../../utilities/storeData";

export const ProductAndCartLoader = async () => {
  const res = await fetch(
    "https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON"
  );
  const products = await res.json();
  let previousCart = [];
  const localData = getStorageData();
  for (const cartData in localData) {
    const getData = products.find((element) => element.key === cartData);
    if (getData) {
      const cartQuantity = localData[cartData];
      getData.Quantity = cartQuantity;
      previousCart.push(getData);
    }
  }

  return { products, previousCart };
};
