import React, { useState } from "react";
import axios from "axios";

const Product = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    warranty: "",
    seller: "",
    category: "",
    photo: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", newProduct.name);
    formData.append("description", newProduct.description);
    formData.append("price", newProduct.price);
    formData.append("stock", newProduct.stock);
    formData.append("warranty", newProduct.warranty);
    formData.append("seller", newProduct.seller);
    formData.append("category", newProduct.category);
    formData.append("photo", newProduct.photo);

    axios
      .post("/addproduct", formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handlePhoto = (e) => {
    setNewProduct({ ...newProduct, photo: e.target.files[0] });
  };

  const handleCategory = (e) => {
    setNewProduct({ ...newProduct, category: e.target.value });
  };
  console.log(newProduct, "IHIH");
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        method="post"
        style={{ display: "flex", flexDirection: "column", width: "30rem" }}
      >
        <input
          type="text"
          placeholder="name"
          name="name"
          value={newProduct.name}
          onChange={handleChange}
        />

        <input
          placeholder="description"
          type="text"
          name="description"
          value={newProduct.description}
          onChange={handleChange}
        />
        <input
          placeholder="price"
          type="number"
          name="price"
          value={newProduct.price}
          onChange={handleChange}
        />
        <input
          placeholder="stock"
          type="number"
          name="stock"
          value={newProduct.stock}
          onChange={handleChange}
        />
        <input
          placeholder="warranty"
          type="number"
          name="warranty"
          value={newProduct.warranty}
          onChange={handleChange}
        />
        <input
          placeholder="seller"
          type="text"
          name="seller"
          value={newProduct.seller}
          onChange={handleChange}
        />
        <select
          name="category"
          value={newProduct.category}
          onChange={handleCategory}
        >
          <option value="">Select one</option>
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="kids">Kids</option>
        </select>

        <input
          type="file"
          accept=".png, .jpg, .jpeg"
          name="photo"
          onChange={handlePhoto}
        />

        <input type="submit" />
      </form>
    </div>
  );
};

export default Product;
