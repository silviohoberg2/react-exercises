import products from "../data/products.js";
import ProductCard from "./ProductCard.jsx";

export default function ProductList() {
  return (
    <section className="product-list">
      <h1>ProductCatalog</h1>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            category={product.category}
            price={product.price}
            available={product.available}
            stock={product.stock}
            featured={product.featured}
            discount={product.discount}
            manufacturer={product.manufacturer}
            rating={product.rating}
          />
        ))}
      </div>
    </section>
  );
}