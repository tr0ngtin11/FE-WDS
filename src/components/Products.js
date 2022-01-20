import Product from "./Product";

const Products = () => {
  return (
    <div>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Products;