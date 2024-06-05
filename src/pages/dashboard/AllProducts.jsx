import { useEffect, useState } from "react";
import ProductCard from "../../components/cards/ProductCard";
import { useForm } from "react-hook-form";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    fetch("https://best-shopping-server-z5ra.vercel.app/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      });
  }, []);

  const handleRemainingProducts = (id) => {
    const remainingProducts = products.filter((product) => product._id !== id);
    setProducts(remainingProducts);
    setFilteredProducts(remainingProducts);
  };

  const handleSearchProduct = (data) => {
    const searchQuery = data.search.toLowerCase();
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery)
    );
    setFilteredProducts(filtered);
    reset();
  };

  const handleResetSearch = () => {
    setFilteredProducts(products);
    reset();
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold text-center text-success mt-5 mb-8 underline">
        All Products
      </h1>
      <form
        onSubmit={handleSubmit(handleSearchProduct)}
        className="ms-5 flex gap-2 my-8"
      >
        <div>
          <input
            {...register("search", { required: true })}
            className="bg-gray-100 p-2 border border-black rounded-lg w-full"
            type="text"
            placeholder="Search Product"
          />
        </div>
        <div className="text-center">
          <input
            className="btn btn-primary btn-sm text-white"
            type="submit"
            value="Search"
          />
        </div>
        <div className="text-center">
          <button
            type="button"
            className="btn btn-primary btn-sm text-white"
            onClick={handleResetSearch}
          >
            View all products
          </button>
        </div>
      </form>
      <div className="grid md:grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
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
