import React from 'react';

import {useState} from 'react';

function NewRawMaterialContent(){

  //declaring states for different input fields
  const[raw_material_name, setRawMaterialName] = useState('')
  const[unit_price, setUnitprice] = useState('')
  const[unit, setUnit] = useState('')
  const[qty_in_stock, setQtyInStock] = useState('')
  const[reorder_level, setReorderLevel] = useState('')
  const[supplier_name, setSupplierName] = useState('')

  const[error, setError] = useState(null)

  /************************************************************************************************************* */

    //for various error alerts for input field values
    const[rmNameAlert, setrmNameAlert] = useState('')
    const[unitPriceAlert, setUnitPriceAlert] = useState('')
    const[qtyInStockAlert, setQtyInStockAlert] = useState('')
    const[reorderLevelAlert, setReorderLevelAlert] = useState('')
    const[supplierNameAlert, setSupplierNameAlert] = useState('')

    //alerts when raw material added/not added to database
    const [rawMaterialAdded, setRMAddedAlert] = useState('')
    const[rawMaterialNotAdded, setRMNotAddedAlert] = useState('')


  /************************************************************************************************************* */
  function handleDemo(){
    setRawMaterialName('Coconut Husk')
    setUnitprice(150)
    setQtyInStock(1500)
    setReorderLevel(500)
    setSupplierName("Maththala Main Fiber Mills")
  }
  /************************************************************************************************************* */
 
  const handleSubmit = async(e) => {
    e.preventDefault()


      const status = "valid"

      if(raw_material_name == Number(raw_material_name)){
        setrmNameAlert(
          <p role="alert" style={{fontSize: "13px", position: "relative", left: "210px", bottom: "10px"}}>
          <font color="red"><strong>Please enter a text for the raw material name</strong></font>
        </p>
        )

        status = "invalid"
      }

      else{
        setrmNameAlert('')
      }


      if(unit_price < 0 || unit_price == 0){
        setUnitPriceAlert(
          <p role="alert" style={{fontSize: "13px", position: "relative", left: "210px", bottom: "10px"}}>
          <font color="red"><strong>Please enter a positive value for the unit price</strong></font>
        </p>
        )

        status = "invalid "
      }

      else{
        setUnitPriceAlert('')
      }


      if(reorder_level < 0){
        setReorderLevelAlert(
          <p role="alert" style={{fontSize: "13px", position: "relative", left: "210px", bottom: "10px"}}>
          <font color="red"><strong>Reorder level cannot be negative. Please enter a positive value</strong></font>
        </p>
        )
        
        status = "invalid"
      }

      else{
        setReorderLevelAlert('')
      }


      if(supplier_name == Number(supplier_name)){
        setSupplierNameAlert(
          <p role="alert" style={{fontSize: "13px", position: "relative", left: "210px", bottom: "10px"}}>
          <font color="red"><strong>Please enter a text for the supplier name</strong></font>
        </p>
        )
        
        status = "invalid"

      }

      else{
        setSupplierNameAlert('')
      }
        
      if(qty_in_stock < 0){
        setQtyInStockAlert(
          <p role="alert" style={{fontSize: "13px", position: "relative", left: "210px", bottom: "10px"}}>
          <font color="red"><strong>Quantity in stock cannot be negative. Please enter a positive value</strong></font>
        </p>
        )

        status = "invalid"
      }

      else{
        setQtyInStockAlert('')
      }



    if(status === "valid"){
        
    const rawMaterial = {raw_material_name, unit_price, unit, qty_in_stock, reorder_level, supplier_name}

    const response = await fetch('/api/inventoryRawMaterials', {
      method: 'POST',
      body: JSON.stringify(rawMaterial),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const json = await response.json()

    if(!response.ok){
      setError(json.error)

        setRMNotAddedAlert(
          <>
          <div className="alert alert-danger alert-dismissible fade show" role="alert">
              <i className="bi bi-exclamation-octagon me-1"></i>
              Failed to add raw material! &nbsp; Raw material already exists
              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>

          </>
        )

      //alert("Failed to add raw material: " + error)
    }

    if(response.ok){
      handleReset()

      setrmNameAlert('')
      setUnitPriceAlert('')
      setReorderLevelAlert('')
      setQtyInStockAlert('')
      setSupplierNameAlert('')


      setRMAddedAlert(
        <>
          <div class="alert alert-success alert-dismissible fade show" role="alert">
          <i class="bi bi-check-circle me-1"></i>
            New raw material added successfully
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
        </>
      )

    }

    }
    
  }

  function handleReset(){
    setRawMaterialName('')
    setUnitprice('')
    setUnit('')
    setQtyInStock('')
    setReorderLevel('')
    setSupplierName('')

    setError(null)
  }

    return(
        <main id="main" className="main">
            <div className="pagetitle">
                <h1>New Raw Material</h1>
            </div>
            <br />

            {rawMaterialAdded}
            {rawMaterialNotAdded}

            <form method="post" onSubmit={handleSubmit}>
                <div className="row mb-3">
                  <label for="inputEmail3" className="col-sm-2 col-form-label">Name</label>
                  <div className="col-sm-3">
                    <input type="text" className="form-control" id="rawMaterialName" onChange={(e) => setRawMaterialName(e.target.value)}  value={raw_material_name} required/>
                  </div>
                </div>   {rmNameAlert} <br />

                <div className="row mb-3">
                  <label for="inputEmail3" className="col-sm-2 col-form-label">Unit Price (Rs.)</label>
                  <div className="col-sm-3">
                    <input type="number" className="form-control" id="rawMaterialUnitPrice" onChange={(e) => setUnitprice(e.target.value)}  value={unit_price} required />
                  </div>
                </div>   {unitPriceAlert}  <br />
              

           
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
                  <label for="inputEmail3" className="col-sm-2 col-form-label">Quantity in Stock</label>
                  <div className="col-sm-3">
                    <input type="number" className="form-control" id="qtyInStock" onChange={(e) => setQtyInStock(e.target.value)}  value={qty_in_stock} required/>
                  </div>
                </div>  {qtyInStockAlert} <br />

                <div className="row mb-3">
                  <label for="inputEmail3" className="col-sm-2 col-form-label">Reorder Level</label>
                  <div className="col-sm-3">
                    <input type="number" className="form-control" id="reorderLevel" onChange={(e) => setReorderLevel(e.target.value)}  value={reorder_level} required/>
                  </div>
                </div>  {reorderLevelAlert} <br />

                <div className="row mb-3">
                  <label for="inputEmail3" className="col-sm-2 col-form-label">Supplier Name</label>
                  <div className="col-sm-3">
                    <input type="text" className="form-control" id="supplierName"  onChange={(e) => setSupplierName(e.target.value)}  value={supplier_name} required />
                  </div>
                </div>   {supplierNameAlert} <br />



                
                <div className="text-center">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;
                  


                <button type="button" className="btn btn-warning" onClick={handleDemo}>DEMO</button> &nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


                <button type="submit" className="btn btn-primary">ADD</button> &nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button type="reset" className="btn btn-secondary" onClick={handleReset}>RESET</button>
                </div>
              </form>


                
            </main>
    );
}

export default NewRawMaterialContent;