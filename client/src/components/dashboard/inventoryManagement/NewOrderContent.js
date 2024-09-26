import React from 'react';

import {Link} from "react-router-dom";

import {useState, useEffect} from 'react'

function NewOrderContent() {

  const[rawMaterials, setRawMaterials] = useState(null)

  useEffect(() => {
    const fetchRawMaterials = async () => {
      const response = await fetch('/api/inventoryRawMaterials')
      const json = await response.json()

      if(response.ok){
        setRawMaterials(json)
      }

    }

    fetchRawMaterials()

  }, [])



  const[products, setProducts] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('/api/inventoryProducts')
      const json = await response.json()

      if(response.ok){
        setProducts(json)
      }

    }

    fetchProducts()

  }, [])


  //to get supplier details of active suppliers only
  const[suppliers, setSuppliers] = useState(null)

  useEffect(() => {
    const fetchSuppliers = async () => {
      const response = await fetch('api/suppliers/names/name')
      const json = await response.json()

      if(response.ok){
        setSuppliers(json)
      }

    }

    fetchSuppliers()

  }, [])



  /******************************************************************* */
  const[product, setProductName] = useState('')
  const[productQuantity, setProductQuantity] = useState('')
  const[rawMaterial, setRawMaterialName] = useState('')
  const[quantity, setrawMaterialQty] = useState('')
  const[supplierName, setSupplierName] = useState('')

  const[productNameAlert, setProductNameAlert] = useState('')
  const[productQuantityAlert, setProductQuantityAlert] = useState('')
  const[rawMaterialNameAlert, setrawMaterialNameAlert] = useState('')
  const[rawMaterialQtyAlert, setrawMaterialQtyAlert] = useState('')
  const[supplierNameAlert, setsupplierNameAlert] = useState('')
  const[unit, setUnit] = useState('')

  const [error, setError] = useState(null)

  //alerts when product order created
  const[productOrderAddedAlert, setProductOrderAddedAlert] = useState('')
  const[productOrderNotAddedAlert, setProductOrderNotAddedAlert] = useState('')
  const[rmOrderAddedAlert, setRmOrderAddedAlert] = useState('')
  const[rmOrderNotAddedAlert, setRmOrderNotAddedAlert] = useState('')


  /******************************************************************* */


  const handleSubmit1 = async (e) => {
    e.preventDefault()

    let status = "valid";

    if(rawMaterial === "" || rawMaterial === "Choose..."){
      setrawMaterialNameAlert(
        <p role="alert" style={{ fontSize: "13px", position: "relative", left: "210px", bottom: "10px" }}>
          <font color="red"><strong>Please select a raw material</strong></font>
        </p>
      )

      status = "invalid"

    }

    else{
      setrawMaterialNameAlert('')
    }

    if(quantity == 0){
 
      setrawMaterialQtyAlert(
        <p role="alert" style={{ fontSize: "13px", position: "relative", left: "210px", bottom: "10px" }}>
          <font color="red"><strong>Please enter the required quantity</strong></font>
        </p>
      )

      status = "invalid"
    }

    else if(quantity < 0){
  
      setrawMaterialQtyAlert(
        <p role="alert" style={{ fontSize: "13px", position: "relative", left: "210px", bottom: "10px" }}>
          <font color="red"><strong>Please enter a positive value</strong></font>
        </p>
      )

      status = "invalid"
    }

    else{
      setrawMaterialQtyAlert('')
     }

     if(supplierName === "" || supplierName === "Choose..."){
      setsupplierNameAlert(
        <p role="alert" style={{ fontSize: "13px", position: "relative", left: "210px", bottom: "10px" }}>
          <font color="red"><strong>Please select a supplier</strong></font>
        </p>
      )

      status = "invalid"

    }

    else{
      setsupplierNameAlert('')
    }

    if(status == "valid"){
      let supplierId = supplierName.split(',')[1]

      const rawMaterialOrder = {supplierId, rawMaterial, quantity, unit}

      const response = await fetch('/api/v9/supplierOrder/', {
        method: 'POST',
        body: JSON.stringify(rawMaterialOrder),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const json = await response.json()

      if (!response.ok) {
        setError(json.error)

        setRmOrderNotAddedAlert(
          <>
            <div className="alert alert-danger alert-dismissible fade show" role="alert">
              <i className="bi bi-exclamation-octagon me-1"></i>
              Failed to create order for raw material! &nbsp; {json.error}
              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>

          </>
        )
      }

      if (response.ok) {
        setRmOrderAddedAlert(
          <>
            <div className="alert alert-success alert-dismissible fade show" role="alert">
            <i className="bi bi-check-circle me-1"></i>
              Order for raw material created successfully
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
          </>
        )

        setRawMaterialName('')
        setrawMaterialQty('')
        setUnit('')
        setSupplierName('')
    
        setrawMaterialNameAlert('')
        setrawMaterialQtyAlert('')
        setsupplierNameAlert('')

        setError(null)

      }
    }


  }

  function handleReset1(){
    setRawMaterialName('')
    setrawMaterialQty('')
    setSupplierName('')
    setUnit('')

    setrawMaterialNameAlert('')
    setrawMaterialQtyAlert('')
    setsupplierNameAlert('')

    setRmOrderAddedAlert('')
    setRmOrderNotAddedAlert('')

    setError(null)
  }


  /******************************************************************* */
  const handleSubmit2 = async (e) => {
    e.preventDefault()

    let status = "valid"

    if(product === "" || product === "Choose..."){
      setProductNameAlert(
        <p role="alert" style={{ fontSize: "13px", position: "relative", left: "210px", bottom: "10px" }}>
          <font color="red"><strong>Please select a product</strong></font>
        </p>
      )

      status = "invalid"

    }

    else{
      setProductNameAlert('')
    }


    if(productQuantity == 0){
 
      setProductQuantityAlert(
        <p role="alert" style={{ fontSize: "13px", position: "relative", left: "210px", bottom: "10px" }}>
          <font color="red"><strong>Please enter the required quantity</strong></font>
        </p>
      )

      status = "invalid"
    }

    else if(productQuantity < 0){
  
      setProductQuantityAlert(
        <p role="alert" style={{ fontSize: "13px", position: "relative", left: "210px", bottom: "10px" }}>
          <font color="red"><strong>Please enter a positive value</strong></font>
        </p>
      )

      status = "invalid"
    }

  
    else if(productQuantity != Math.trunc(productQuantity)){

      setProductQuantityAlert(
        <p role="alert" style={{ fontSize: "13px", position: "relative", left: "210px", bottom: "10px" }}>
          <font color="red"><strong>Please enter a positive whole number</strong></font>
        </p>
      )

      status = "invalid"
    }

    else{
     setProductQuantityAlert('')
    }


    if(status === "valid"){
      
      const productOrder = {product, productQuantity}

      const response = await fetch('/api/inventoryProductOrder', {
        method: 'POST',
        body: JSON.stringify(productOrder),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const json = await response.json()

      if (!response.ok) {
        setError(json.error)

        setProductOrderNotAddedAlert(
          <>
            <div className="alert alert-danger alert-dismissible fade show" role="alert">
              <i className="bi bi-exclamation-octagon me-1"></i>
              Failed to create order for product! &nbsp; {json.error}
              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>

          </>
        )
      }

      if (response.ok) {
        setProductOrderAddedAlert(
          <>
            <div className="alert alert-success alert-dismissible fade show" role="alert">
            <i className="bi bi-check-circle me-1"></i>
              Order for product created successfully
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
          </>
        )

        setProductName('')
        setProductQuantity('')
    
        setProductQuantityAlert('')
        setProductNameAlert('')

        setError(null)

    }

  }
}



  function handleReset2(){
    setProductName('')
    setProductQuantity('')

    setProductQuantityAlert('')
    setProductNameAlert('')

    setProductOrderAddedAlert('')
    setProductOrderNotAddedAlert('')

    setError(null)
  }


    return(
        <main id="main" className="main">

            {/* <Link to="/inventory-cart-overview-page" style={{position: 'relative', left: '90%', top: '10px'}}>
                <i className="bi bi-cart2"></i>
            </Link>  */}

            <div className="pagetitle">
                <h1>New Order - Raw Material</h1>
            </div> 
                    {rmOrderAddedAlert}
                    {rmOrderNotAddedAlert}

                    <br />

            {/* <p style={{position: 'relative', left: '91.5%', bottom: '60px'}}>0</p> */}


            {/*Start of raw material form*/}
            <form onSubmit={handleSubmit1}>
                <div className="row mb-3">
                  <label for="inputEmail3" className="col-sm-2 col-form-label">Raw Material Name</label>
                  <div className="col-sm-3">
                    <select id="rawMaterialName" className="form-select" onChange={(e) => setRawMaterialName(e.target.value)} value={rawMaterial}>
                        <option defaultValue="">Choose...</option>

                            {rawMaterials && rawMaterials.map((rm) => 
                            (
                                <option value={rm.raw_material_name} key={rm._id}>{rm.raw_material_name}</option>
                            ))}
      
                    </select>
                  </div>
                </div>   {rawMaterialNameAlert} <br />

                <div className="row mb-3">
                  <label for="inputEmail3" className="col-sm-2 col-form-label">Required Quantity</label>
                  <div className="col-sm-3">
                    <input type="number" className="form-control" id="requiredrawMaterialQty" required onChange={(e) => setrawMaterialQty(e.target.value)} value={quantity}/>
                  </div>
                </div>   {rawMaterialQtyAlert} <br />
              

           
                <fieldset className="row mb-3">
                  <legend className="col-form-label col-sm-2 pt-0">Unit</legend>
                  <div className="col-sm-10">
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="gridRadios" id="kg" value="KG" onChange={(e) => setUnit(e.target.value)} required/>
                      <label className="form-check-label" for="gridRadios1">
                        KG
                      </label>
                    </div>
                    <div class="form-check">
                      <input className="form-check-input" type="radio" name="gridRadios" id="sqMtres" value="Square metres" onChange={(e) => setUnit(e.target.value)} required />
                      <label className="form-check-label" for="gridRadios2">
                        Square metres
                      </label>
                    </div>
                    <div className="form-check disabled">
                      <input className="form-check-input" type="radio" name="gridRadios" id="cubicMetres" value="Cubic metres" onChange={(e) => setUnit(e.target.value)} required />
                      <label className="form-check-label" for="gridRadios3">
                        Cubic metres
                      </label>
                    </div>
                  </div>
                </fieldset> <br />



              <div className="row mb-3">
                  <label for="inputEmail3" className="col-sm-2 col-form-label">Supplier Name</label>
                  <div className="col-sm-3">
                    <select id="supplierName" className="form-select" onChange={(e) => setSupplierName(e.target.value)} value={supplierName}>
                      <option defaultValue="">Choose...</option>
                        
                        {suppliers && suppliers.map((supplier) => 
                            (
                                <option value={supplier.companyName + ',' + supplier._id} key={supplier._id}>{supplier.companyName}</option>
                            ))}

                    </select>
                  </div>
                </div> {supplierNameAlert} <br />

               
                
                <div className="text-center">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                &nbsp;&nbsp;
                <button type="submit" className="btn btn-primary">PLACE ORDER</button> &nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button type="reset" className="btn btn-secondary" onClick={handleReset1}>RESET</button>
                </div>
              </form>

              {/*End of raw material form*/}

                <hr />
   
              <br /><br />
                <div className="pagetitle">
                    <h1>New Order - Product</h1>
                </div>
                    
                 {productOrderNotAddedAlert}
                 {productOrderAddedAlert}

                 <br /> 

              {/*Start of product form*/}
              <form onSubmit={handleSubmit2}>
                <div className="row mb-3">
                  <label for="inputEmail3" className="col-sm-2 col-form-label">Product Name</label>
                  <div className="col-sm-3">
                    <select id="productName" className="form-select" onChange={(e) => setProductName(e.target.value)} value={product}>
                            <option defaultValue="">Choose...</option>
                            
                            {products && products.map((product) => (
                              <option value={product.product_name + ',' + product._id} key={product._id}>{product.product_name}</option>
                            ))}

                        </select>
                    </div>
                </div>    {productNameAlert}   <br /> 

                <div className="row mb-3">
                  <label for="inputEmail3" className="col-sm-2 col-form-label">Required Quantity</label>
                  <div className="col-sm-3">
                    <input type="number" className="form-control" id="requiredProductQty"
                    onChange={(e) => setProductQuantity(e.target.value)} value={productQuantity}  required />
                  </div>
                </div>   {productQuantityAlert}   <br /> 
              

           
               
                <div className="text-center">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;

                <button type="submit" className="btn btn-primary">PLACE ORDER</button> &nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button type="reset" className="btn btn-secondary" onClick={handleReset2}>RESET</button>
                </div>
              </form>

               {/*End of product form*/}
   
        </main>
    );
}

export default NewOrderContent;