import { useEffect, useState } from "react";
import ProductCard from "../../components/cards/ProductCard";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleRemainingProducts = (id) => {
    setProducts(products.filter((product) => product._id !== id));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold text-center text-success mt-5 mb-8 underline">
        All Produts
      </h1>
      <div className="grid md:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            onDelete={handleRemainingProducts}
          />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
