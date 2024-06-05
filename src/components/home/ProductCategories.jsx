const ProductCategories = () => {
  const categories = [
    "Men's Sneaker",
    "Men's Boot",
    "Pant",
    "Bag",
    "Cap",
    "Earphones",
    "Bottle",
  ];
  return (
    <div className="w-2/3 mx-auto">
      <h2 className="my-16 text-center font-bold text-2xl text-primary">
        Our Product Categories
      </h2>
      <div className="grid md:grid-cols-4 gap-4">
        {categories.map((category, index) => (
          <div key={index}>
            <h3 className="bg-purple-600 rounded-lg text-white font-semibold text-center py-4">
              {category}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCategories;
