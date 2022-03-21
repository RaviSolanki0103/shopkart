import axios from 'axios';
import React from 'react'

function ShowProduct() {

    axios.get("/getproduct").then((res) =>{
        console.log(res, "fgfgfgffg").then((err)=>{
            console.log(err, "SHOW PRODUCT ERROR");
        });
    })

  return (
    
    <div>
        <h1>Hello </h1>
    </div>
  )
}

export default ShowProduct