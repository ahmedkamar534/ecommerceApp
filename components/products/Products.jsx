import ProductsItems from "../productsItems/ProductsItems";

export default function Products(props) {
  return (
    <div className="row py-5">
      {props.products.map((product) => (
        <ProductsItems key={product.id} product={product} />
      ))}
    </div>
  );
}
