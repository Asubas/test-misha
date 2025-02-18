import { useAppDispatch, useAppSelector } from "../../../hooks";
import { removeFromFavorite } from "../../../store/elementSlice";
import "./basket.css";

export function Basket({ activeBasket }: { activeBasket: boolean }) {
  const favoriteProducts = useAppSelector((state) => state.elements.favorites);
  const dispatch = useAppDispatch();
  const removeProduct = (id: number) => {
    dispatch(removeFromFavorite(id));
  };

  return (
    <>
      <div className={activeBasket ? "basketSideBar" : "active basketSideBar"}>
        <p className="basketSideBarTitle">Favorite products</p>
        {favoriteProducts.length > 0 ? (
          favoriteProducts.map((product) => (
            <div className="basketSideBarProduct" key={product.id}>
              <span className="productName">{product.name}</span>
              <span className="productPrice">{product.price} руб</span>
              <button
                className="removeFromFavorite"
                onClick={() => removeProduct(product.id)}
              />
            </div>
          ))
        ) : (
          <p className="emptyBasket">No favorite products</p>
        )}
      </div>
    </>
  );
}
