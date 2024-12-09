import NavBar from "./NavBar";

const AddProduct = () => {
  const handelSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.productName.value;
    const Price = form.price.value;
    const brandName = form.brandName.value;
    const imageUrl = form.imageUrl.value;
    const specifications = form.specifications.value;
    const newProduct = { name, Price, brandName, imageUrl, specifications };
    console.log(newProduct);
  };
  return (
    <div>
      <NavBar></NavBar>
      <div className="max-w-3xl mx-auto mt-10 p-5 bg-white shadow-md rounded-lg animate-fadeIn">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Add New Product
        </h2>
        <form onSubmit={handelSubmit} className="space-y-6">
          {/* Product Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Product Name
            </label>
            <input
              type="text"
              name="productName"
              placeholder="Enter product name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Price
            </label>
            <input
              type="number"
              name="price"
              placeholder="Enter price"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Brand Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Brand Name
            </label>
            <input
              type="text"
              name="brandName"
              placeholder="Enter brand name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Image URL
            </label>
            <input
              type="text"
              name="imageUrl"
              placeholder="Enter image URL"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Specifications */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Specifications
            </label>
            <textarea
              name="specifications"
              placeholder="Enter specifications"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
