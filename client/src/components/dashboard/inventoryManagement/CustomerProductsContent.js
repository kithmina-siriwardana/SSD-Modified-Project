import React from 'react';

import { useState, useEffect } from 'react';

import {Link} from 'react-router-dom';

function CustomerProductsContent(props) {

   
    const [products, setProducts] = useState(null)

    useEffect(() => {
        
        setProducts(props.products)
          
    }, [props.products])

    return (
        <React.Fragment>                              
                                    
    {/* <!-- PRODUCT DETAILS AREA START --> */}             


        {products && products.map((product) => (
            <>
                                                       
        
            <div className="card w-25 d-inline-flex m-5"  key={product._id}>
                <img className ="productsImages" src={(product.photo == '') ? 'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-512.png' : require("./uploadedImages/"+product.photo)} class="card-img-top" alt="img" />
                <div class="card-body">
                    <center>
                    <Link to ={"/product-overview/"+product._id}><h5 className="card-title">{product.product_name}</h5></Link>
                    <p className="card-text"><font color="green"><b>Rs. {product.unit_price} /=</b></font> </p>
                    </center>
                </div>
                </div>
                </>

        ))}

{/* <!-- PRODUCT DETAILS AREA END --> */}


                {/* <!-- FEATURE AREA START ( Feature - 3) --> */}
                <div className="ltn__feature-area before-bg-bottom-2 mb--30--- plr--5">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="ltn__feature-item-box-wrap ltn__border-between-column white-bg">
                                    <div className="row">
                                        <div className="col-xl-3 col-md-6 col-12">
                                            <div className="ltn__feature-item ltn__feature-item-8">

                                                <div className="ltn__feature-info">
                                                    <h4>SUSTAINABLE</h4>
                                                    <p>We care for the environment and are ambitious to help you grow your production the most sustainable way.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-md-6 col-12">
                                            <div className="ltn__feature-item ltn__feature-item-8">

                                                <div className="ltn__feature-info">
                                                    <h4>SOLUTION DRIVEN</h4>
                                                    <p>We ensure the product quality
                                                        that is our main goal</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-md-6 col-12">
                                            <div className="ltn__feature-item ltn__feature-item-8">

                                                <div className="ltn__feature-info">
                                                    <h4>INNOVATIVE</h4>
                                                    <p>We are creative in developing new products and services to improve efficiency, product quality, sustainability, more yield and less waste. </p>


                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-md-6 col-12">
                                            <div className="ltn__feature-item ltn__feature-item-8">

                                                <div className="ltn__feature-info">
                                                    <h4>FREE DELIVERY</h4>
                                                    <p>We ensure the product quality
                                                        that you can trust easily</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>





        </React.Fragment>
    )
}

export default CustomerProductsContent;