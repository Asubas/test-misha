import { FavoriteButton } from "../../../components/favorite/favoriteButton";
import { IProduct } from "../../../types/productInterface";

export function ProductItem({ product }: { product: IProduct }) {
  return (
    <>
      {product.name}
      <p>{product.description}</p>
      <p>{product.price} руб</p>
      <FavoriteButton id={product.id} />
    </>
  );
}
