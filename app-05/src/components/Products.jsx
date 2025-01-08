import React, { useEffect, useState } from "react";
import "./components.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function getProducts() {
    try {
      setLoading(true);

      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setProducts(data.products); //
    } catch (error) {
      setError(true);
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  if (error) {
    return <h1>Something went wrong please try again...</h1>;
  }
  return (
    <div>
      <h1>Products</h1>
      {loading ? (
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        <div className="container">
          {products.map((product, index) => {
            return (
              <div className="product-card" key={product.id}>
                <img src={product.thumbnail} alt="" />
                <p>{product.title}</p>
                <p>Price {product.price}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Products;
