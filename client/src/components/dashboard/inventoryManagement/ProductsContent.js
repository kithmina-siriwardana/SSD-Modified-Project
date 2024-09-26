import React, { useReducer } from 'react';
import { useNavigate } from "react-router-dom";

import {Link} from "react-router-dom";

import { useState, useEffect } from 'react';



function ProductsContent(props) {

  let navigate = useNavigate();

  //navigates to the add new product page when add button is clicked
  function handleAddBtnOnClick(){
    let path = "/inventory-add-product-page";
    navigate(path);
  }

  const[products, setProducts] = useState(props.products)

  useEffect(() => {

    setProducts(props.products)

  }, [props.products])



    return(
        <div >
            <div className="pagetitle">
                <h1>Products</h1>
   
                <div className='float-end' style={{position: 'absolute', right: '285px'}}>
                    <button type="button" class="btn btn-primary rounded-pill" style={{position: 'relative', marginRight: '60px'}} onClick={handleAddBtnOnClick}>ADD</button>
                </div> 

            </div>

      
            <br /><br /> {/*End of main title*/}

           
              {products && products.map((product) => (   
                  <>
                   <div className="card w-25 d-inline-flex m-5"  key={product._id}>
                    <img style={{height: '100%', width: '100%'}} src={(product.photo == '') ? 'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-512.png' : require("./uploadedImages/"+product.photo)} class="card-img-top" alt="img" />
                    <div class="card-body">
                      <center>
                        <h5 className="card-title">{product.product_name}</h5>
                        <p className="card-text">In Stock : <b>{(product.units_in_stock == 0) ? <font color="red">NO</font> : <font color="green">YES</font>}</b></p>
                      </center>
                      <Link to={{pathname: "/inventory-product-overview-page/"+product._id}} className="card-link float-end">View</Link>
                    </div>
                  </div>
                  </>

              ))}
    
        </div>
    )
}

export default ProductsContent;