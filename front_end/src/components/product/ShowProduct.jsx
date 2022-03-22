import axios from "axios";
import React, { useEffect, useState } from "react";

function ShowProduct() {
  const [first, setfirst] = useState("");
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    axios
      .get("/getproduct")
      .then((res) => {
        setDatas(res.data);
        setfirst(res.data[2].product_img);
        console.log(res.data[2].product_img, "fgfgfgffg");
      })
      .then((err) => {
        console.log(err, "SHOW PRODUCT ERROR");
      });
  }, []);

  return (
    <div>
      <h1>Hello </h1>
      <img src={`uploads/${first}`} alt="can't" style={{ width: "10rem" }} />
      <p>{JSON.stringify(datas)}</p>

      {datas.map((x) => {
        console.log(x);
        return (
          <div>
            <p>Name: {x.name}</p>
            <p>Name: {x.price}</p>
            <p>Seller: {x.seller}</p>
            <p>Description:  {x.description}</p>
            <img src={`uploads/${x.product_img}`} alt="" style={{ width: "10rem" }}/>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default ShowProduct;
