async function getProducts(currentProduct: string) {
  return fetch(`http://localhost:3001/${currentProduct}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Ошибка при получении данных: ${res.statusText}`);
      }
      return res.json();
    })
    .then((resData) => {
      if (resData) {
        return resData;
      } else {
        console.log("Данные отсутствуют");
      }
    })
    .catch((error) => {
      console.error("Произошла ошибка:", error.message);
    });
}

export { getProducts };
