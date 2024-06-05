import { useLoaderData } from "react-router-dom";
import Accordian from "../components/home/Accordian";
import Banner from "../components/home/Banner";
import ProductCategories from "../components/home/ProductCategories";
import ProductCard from "../components/cards/ProductCard";

const Home = () => {
  const products = useLoaderData();

  return (
    <div>
      <Banner />
      <ProductCategories />
      <div className="w-11/12 mx-auto">
        <h1 className="text-2xl my-16 font-bold text-center text-primary">
          Our Latest Products
        </h1>
        <div className="grid grid-cols-4 gap-6">
          {[...products]
            ?.reverse()
            ?.slice(0, 4)
            ?.map((product) => (
              <ProductCard key={product?._id} product={product} />
            ))}
        </div>
      </div>
      <Accordian />
    </div>
  );
};

export default Home;
