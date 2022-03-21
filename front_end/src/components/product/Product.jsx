import React, { useState } from "react";
import axios from "axios";

const Product = () => {
  const [newUser, setNewUser] = useState({
    name: "",
    description: "",
    price: 0,
    stock: 0,
    photo: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", newUser.name);
    formData.append("description", newUser.description);
    formData.append("price", newUser.price);
    formData.append("stock", newUser.stock);
    formData.append("photo", newUser.photo);

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
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handlePhoto = (e) => {
    setNewUser({ ...newUser, photo: e.target.files[0] });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} encType="multipart/form-data" method="post">
        <input
          type="text"
          placeholder="name"
          name="name"
          value={newUser.name}
          onChange={handleChange}
        />

        <input
          placeholder="description"
          type="text"
          name="description"
          value={newUser.description}
          onChange={handleChange}
        />
        <input
          placeholder="price"
          type="number"
          name="price"
          value={newUser.price}
          onChange={handleChange}
        />
        <input
          placeholder="stock"
          type="number"
          name="stock"
          value={newUser.stock}
          onChange={handleChange}
        />

        <input
          type="file"
          accept=".png, .jpg, .jpeg"
          name="photo"
          onChange={handlePhoto}
        />

        <input type="submit" />
      </form>


      <div>
          {/* <img src={`/uploads/${}`} alt="image" /> */}
      </div>
    </div>
  );
};

export default Product;
