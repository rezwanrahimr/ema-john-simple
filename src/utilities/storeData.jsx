/* 
1.create a function and call the function on the cart and pass the cart id.
2. then create a empty object.
3. then check the condition and store the data.
*/

const getDb = (id) => {
  const localDb = () => localStorage.getItem("cart-info");
  const db = localDb();
  let cartData = {};
  if (!db) {
    cartData[id] = 1;
  } else {
    cartData = JSON.parse(db);
    if (cartData[id]) {
      const newData = cartData[id] + 1;
      cartData[id] = newData;
    } else {
      cartData[id] = 1;
    }
  }
  setLocal(cartData);
};

const setLocal = (cart) => {
  localStorage.setItem("cart-info", JSON.stringify(cart));
};

const getStorageData = () => {
  const localDb = () => localStorage.getItem("cart-info");
  const db = localDb();
  if (db) {
    return db;
  }
};
export { getDb, getStorageData };
