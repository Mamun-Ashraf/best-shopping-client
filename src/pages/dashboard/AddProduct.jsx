import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddProducts = () => {
  // const token = localStorage.getItem("token");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const handleAddProduct = async (data) => {
    await fetch("http://localhost:5000/product", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        // authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire("Product added successfully!");
        reset();
      });
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold text-center text-success mt-5 mb-8 underline">
        Add a Product
      </h1>
      <form
        onSubmit={handleSubmit(handleAddProduct)}
        className="space-y-2 w-1/2 mx-auto"
      >
        <div>
          <input
            {...register("title", { required: true })}
            className="bg-gray-100 p-2 border border-black rounded-lg w-full"
            type="text"
            placeholder="Title"
          />
          {errors.title && (
            <span className="text-red-400">Title is required</span>
          )}
        </div>
        <div>
          <input
            {...register("brand", { required: true })}
            className="bg-gray-100 p-2 border border-black rounded-lg w-full"
            type="text"
            placeholder="Brand"
          />
          {errors.brand && (
            <span className="text-red-400">Brand is required</span>
          )}
        </div>
        <div>
          <input
            {...register("price", { required: true })}
            className="bg-gray-100 p-2 border border-black rounded-lg w-full"
            type="number"
            placeholder="Price"
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
          />
        </div>
        <div className="text-center">
          <input
            className="btn btn-success text-white"
            type="submit"
            value="Add product"
          />
        </div>
      </form>
    </div>
  );
};

export default AddProducts;
