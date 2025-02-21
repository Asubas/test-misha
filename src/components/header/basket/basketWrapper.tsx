import styles from "./basket.module.scss";
import { memo, useState } from "react";
import { Basket } from "./basket";

export const BasketWrapper = memo(() => {
  const [activeBasket, setActiveBasket] = useState(false);
  const showBasket = () => setActiveBasket((val) => !val);
  return (
    <>
      <div className={styles.basketWrapper} onClick={showBasket}>
        {" "}
        Корзина
      </div>
      <Basket activeBasket={activeBasket} />
    </>
  );
});
