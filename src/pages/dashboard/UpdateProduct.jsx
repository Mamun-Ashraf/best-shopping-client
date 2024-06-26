import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProducts = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const product = useLoaderData();

  const handleUpdateProduct = async (data) => {
    const token = localStorage.getItem("token");

    await fetch(
      `https://best-shopping-server.onrender.com/product/${product._id}`,
      {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then(() => {
        Swal.fire("Product updated successfully!");
        reset();
      });
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold text-center text-success mt-5 mb-8 underline">
        Update Product
      </h1>
      <form
        onSubmit={handleSubmit(handleUpdateProduct)}
        className="space-y-2 w-1/2 mx-auto"
      >
        <div>
          <input
            {...register("name", { required: true })}
            className="bg-gray-100 p-2 border border-black rounded-lg w-full"
            type="text"
            placeholder="Name"
            defaultValue={product.name}
          />
          {errors.name && (
            <span className="text-red-400">Name is required</span>
          )}
        </div>
        <div>
          <input
            {...register("brand", { required: true })}
            className="bg-gray-100 p-2 border border-black rounded-lg w-full"
            type="text"
            placeholder="Brand"
            defaultValue={product.brand}
          />
          {errors.brand && (
            <span className="text-red-400">Brand is required</span>
          )}
        </div>
        <div>
          <input
            {...register("category", { required: true })}
            className="bg-gray-100 p-2 border border-black rounded-lg w-full"
            type="text"
            placeholder="Category"
            defaultValue={product.category}
          />
          {errors.category && (
            <span className="text-red-400">Category is required</span>
          )}
        </div>
        <div>
          <input
            {...register("price", { required: true })}
            className="bg-gray-100 p-2 border border-black rounded-lg w-full"
            type="number"
            placeholder="Price"
            defaultValue={product.price}
          />
          {errors.price && (
            <span className="text-red-400">Price is required</span>
          )}
        </div>
        <div>
          <input
            {...register("image")}
            className="bg-gray-100 p-2 border border-black rounded-lg w-full"
            type="text"
            placeholder="Image URL"
            defaultValue={product.image}
          />
        </div>
        <div className="text-center">
          <input
            className="btn btn-success text-white"
            type="submit"
            value="Update product"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateProducts;
