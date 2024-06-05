const SingleProduct = ({ product }) => {
  const { name, brand, price, image } = product;

  return (
    <div className=" card  shadow-xl image-full">
      <figure>
        <img src={image} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <h3>
          <span className="text-lg font-semibold">Brand:</span> {brand}
        </h3>
        <h3>
          <span className="text-lg font-semibold">Price:</span> ${price}
        </h3>
      </div>
    </div>
  );
};

export default SingleProduct;
