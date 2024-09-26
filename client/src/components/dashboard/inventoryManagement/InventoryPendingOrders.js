import React from  'react';

import {useState, useEffect,} from 'react';

function InventoryPendingOrders (){

  const[inventoryProductOrders, setInventoryProductOrders] = useState(null)

  const[productStockUpdatedAlert, setProductStockUpdatedAlert] = useState('')
  const[RMStockUpdatedAlert, setRMStockUpdatedAlert] = useState('')

  const[orderPackagedAlert, setorderPackagedAlert] = useState('')

  const[orderPackagedAllAlert, setorderPackagedAllAlert] = useState('')

  useEffect(() => {
    const fetchInventoryProductOrders = async () => {
      const response = await fetch('/api/inventoryProductOrder')
      const json = await response.json()

      if(response.ok){
        setInventoryProductOrders(json)
      }

    }

    fetchInventoryProductOrders()

  }, [])


  // to delete a particular order
  const deleteProductOrder = async (id) => {

    const response = await fetch('/api/inventoryProductOrder/' + id, {
      method: 'DELETE'
    })

    const json = await response.json()

    if(response.ok){
      window.location.reload()
    }

  }


  /********************************************************************************************************* */

  const[products, setProducts] = useState('')

  useEffect(() => {
    const fetchProduct = async () => {
      
      const response = await fetch('/api/inventoryProducts/')
      const json = await response.json()
      
      if (response.ok) {
          setProducts(json)
          //console.log(json)

      } else{
        console.log("not ok")
      }
       
    }

    fetchProduct()
    
  }, [])



  //to update stock of a product
  const updateProductStock = async(id, productQty, ipoID) => {
    let foundProduct = {};

   //console.log(id)

    for(let i = 0; i < products.length; i++) {

      if(products[i]._id === id){
        foundProduct = products[i]

        foundProduct['units_in_stock'] += productQty

        const response = await fetch('/api/inventoryProducts/' + id, {
          method: 'PATCH',
          body: JSON.stringify(foundProduct),
          headers: {
            'Content-Type': 'application/json'
          }
        })
  
        const json = await response.json()
  
        if(response.ok){
         // alert("Product stock successfully updated")

         setProductStockUpdatedAlert(
          <>
            <div className="alert alert-success alert-dismissible fade show" role="alert">
            <i className="bi bi-check-circle me-1"></i>
              Product Stock successfully updated
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
          </>
        )


           //delete that particular product order upon successful updation
          const responseForDeleteIPO = await fetch('/api/inventoryProductOrder/' + ipoID, {
            method: 'DELETE'
          })

          if(responseForDeleteIPO.ok){
            
            //window.location.reload()
            setTimeout(function(){
              window.location.reload();

              setProductStockUpdatedAlert('')
           }, 1000);

           
          }

      }
      

      else
        continue;
  }
    

  
  }


}

  
  /********************************************************************************************************* */
  



  
  //to fetch all customer orders
  const[customerOrder, setCustomerOrders] = useState('')

  useEffect(() => {
    const fetchCustOrder = async () => {
      
      const response = await fetch('/api/orders/orderStatus/pending')
      const json = await response.json()
      
      if (response.ok) {
          setCustomerOrders(json)
          //console.log("dsdsdsdsd", json)

      } else{
        console.log("not ok")
      }
       
    }

    fetchCustOrder()
    
  }, [])

  /************************************************************************************************************* */

  const updateOrderStatus = async(custOrderID) => {

    const response = await fetch('/api/orders/packaged/' + custOrderID, {
      method: 'PATCH',
      body: JSON.stringify({Status: "Packaged"}),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if(response.ok){
      setorderPackagedAlert(
        <>
            <div className="alert alert-success alert-dismissible fade show" role="alert">
            <i className="bi bi-check-circle me-1"></i>
              Order status successfully updated
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
          </>
      )

      setTimeout(function(){
        window.location.reload();

        setorderPackagedAlert('')
     }, 2000);


    }

  }

  /*******************************For setting status as packaged for all orders****************************************************************************** */
  const updateOrderStatusAll = async(customerOrder) => {

    for(let i = 0; i < customerOrder.length; i++){

      const response = await fetch('/api/orders/packaged/' + customerOrder[i]._id, {
        method: 'PATCH',
        body: JSON.stringify({Status: "Packaged"}),
        headers: {
          'Content-Type': 'application/json'
        }
      })

    }

    setorderPackagedAllAlert(
      <>
            <div className="alert alert-success alert-dismissible fade show" role="alert">
            <i className="bi bi-check-circle me-1"></i>
                Successfully updated status of all orders
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
          </>
    )
  
    setTimeout(function(){
      window.location.reload();

      setorderPackagedAllAlert('')
   }, 2000);
    
  }
  /************************************************************************************************************** */
  const[rawMaterials, setRawMaterials] = useState('')

  useEffect(() => {
    const fetchRawMaterials = async () => {
      
      const response = await fetch('/api/inventoryRawMaterials')
      const json = await response.json()
      
      if (response.ok) {
          setRawMaterials(json)
          //console.log(json)

      } else{
        console.log("not ok")
      }
       
    }

    fetchRawMaterials()
    
  }, [])

  /********************************************************************************************************* */
  
  //to fetch all inventory raw material  orders
  const[rawMaterialOrder, setrawMaterialOrders] = useState('')

  useEffect(() => {
    const fetchRawMaterialOrder = async () => {
      
      const response = await fetch('/api/v9/supplierOrder/')

      const json = await response.json()
      
      if (response.ok) {
          setrawMaterialOrders(json)
          //console.log("dsdsdsdsd", json)

      } else{
        console.log("not ok")
      }
       
    }

    fetchRawMaterialOrder()
    
  }, [])

  /************************************************************************************************************* */

   //to update stock of a raw material
   const  updateRmStock = async(rmName, rmQty, rmOrderID) => {
    let foundRawMaterial = {};

   //console.log(id)

    for(let i = 0; i < rawMaterials.length; i++) {

      if(rawMaterials[i].raw_material_name === rmName){
        foundRawMaterial = rawMaterials[i]

        foundRawMaterial['qty_in_stock'] += rmQty

        const response = await fetch('/api/inventoryRawMaterials/' + rawMaterials[i]._id, {
          method: 'PATCH',
          body: JSON.stringify(foundRawMaterial),
          headers: {
            'Content-Type': 'application/json'
          }
        })

        const response2 = await fetch('/api/v9/supplierOrder/' + rmOrderID, {
          method: 'PATCH',
          body: JSON.stringify({orderStatus: "Packaged"}),
          headers: {
            'Content-Type': 'application/json'
          }
        })
  
        const json = await response.json()
  
        if(response.ok && response2.ok){
          // alert("Product stock successfully updated")

         setRMStockUpdatedAlert(
          <>
            <div className="alert alert-success alert-dismissible fade show" role="alert">
            <i className="bi bi-check-circle me-1"></i>
              Raw Material Stock successfully updated
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
          </>
        )


           //delete that particular product order upon successful updation
          // const responseForDeleteRMO = await fetch('/api/v9/supplierOrder/' + rmOrderID, {
          //   method: 'DELETE'
          // })

          // if(responseForDeleteRMO.ok){
            
            //window.location.reload()
            setTimeout(function(){
              window.location.reload();

              setRMStockUpdatedAlert('')
           }, 1000);

           
          //}

      }
      

      else
        continue;
  }
    

  
  }



}
  /***************************************************************************************************************** */



    return(

        <main id="main" className="main">

            <br /><div className="pagetitle">
                <h1>Pending Orders</h1>
            </div> <br />   {productStockUpdatedAlert}


        <div className="card">
          <div className="card-body">
          <center><h5 className="card-title">Products</h5></center>

            <div className="card-body"  style={{height: '352px', overflow: 'auto'}}>
            <table class="table table-hover" style={{textAlign: 'center', verticalAlign: 'middle'}}>
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Date</th>
                    <th scope="col">Status</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  
                  {inventoryProductOrders && inventoryProductOrders.map((ipo) => 
                          (
                              <tr>
                              <th scope="row">{inventoryProductOrders.indexOf(ipo) + 1}</th>
                              <td>{ipo.product.split(',')[0]}</td>
                              <td>{ipo.productQuantity}</td>
                              <td>{ipo.currentDate.split('T')[0]}</td>
                              <td>{ipo.status}</td>
                              <td>
                              {(ipo.status === "Pending") ? 
                              <button type="button" class="btn btn-outline-warning" disabled 
                              title="Update Stock"><i class="bi bi-arrow-clockwise"></i></button>

                              :
                              <button type="button" class="btn btn-outline-warning"  onClick={() => updateProductStock(ipo.product.split(',')[1], ipo.productQuantity, ipo._id)}
                              title="Update Stock"><i class="bi bi-arrow-clockwise"></i></button>
                              }
                                  
                              </td>                      
                            </tr>
                          ))}
                </tbody>
              </table>
            </div>

          </div>
        </div>

  
                                {RMStockUpdatedAlert}
        <div className="card">
          <div className="card-body">
          <center><h5 className="card-title">Raw Materials</h5></center>

            <div className="card-body"  style={{height: '352px', overflow: 'auto'}}>
            <table class="table table-hover" style={{textAlign: 'center', verticalAlign: 'middle'}}>
                <thead>
                  <tr>
                    <th scope="col">Raw Material</th>
                    <th scope="col">Supplier ID</th>
                    <th scope="col">Date</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Unit</th>
                    <th scope="col">Status</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>

                  {rawMaterialOrder && rawMaterialOrder.map( (rmOrder) => (
                      
                      
                      <tr key={rmOrder._id}>

                        {(rmOrder.orderStatus === "Received") 
                        ?
                        <>
                        </>
                        :
                        <>
                        <td>{rmOrder.rawMaterial}</td>
                        <td>{rmOrder.supplierId}</td>
                        <td>{rmOrder.Date.split('T')[0]}</td>
                        <td>{rmOrder.quantity}</td>
                        <td>{rmOrder.unit}</td>
                        <td>{rmOrder.orderStatus}</td>
                       
                        <td>{(rmOrder.orderStatus === "Pending") ? 
                              <button type="button" class="btn btn-outline-warning" disabled 
                              title="Update Stock"><i class="bi bi-arrow-clockwise"></i></button>

                              :

                              <button type="button" class="btn btn-outline-warning"
                              title="Update Stock"><i class="bi bi-arrow-clockwise" onClick={() => updateRmStock(rmOrder.rawMaterial, rmOrder.quantity, rmOrder._id)}></i></button>
                              }
                              </td>
                          </>
                    
                        }
                        
                       
                    </tr>
                    ))}
                    
                </tbody>
              </table>
            </div>

          </div>
        </div>




          {orderPackagedAlert}
          {orderPackagedAllAlert}




        <div className="card">
          <div className="card-body">
          
          <center><h5 className="card-title">Customers</h5></center>


            <div className="card-body"  style={{height: '352px', overflow: 'auto'}}>
            <table class="table table-hover" style={{textAlign: 'center', verticalAlign: 'middle'}}>
                <thead>
                  <tr>
                    {/* <th scope="col">#</th> */}
                    <th scope="col">Order ID</th>
                    <th scope="col">Customer ID</th>
                    <th scope="col">Receiver Name</th>
                    <th scope="col">Status</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {customerOrder && customerOrder.map( (custOrder) => (
                      
                    <tr key={custOrder._id}>
                      
                      {/* <th scope="row">{customerOrder.indexOf(custOrder) + 1}</th> */}
                      <td>{custOrder._id}</td>
                      <td>{custOrder.CustomerID}</td>
                      <td>{custOrder.Reciever_Name}</td>
                      <td>{custOrder.Status}</td>
                      <td><button type="button" class="btn btn-outline-success" onClick={() => updateOrderStatus(custOrder._id)}  title="Set as packaged"><i class="bi bi-box-fill"></i></button>
                      </td>
                  
                  </tr>
                  ))}
                  
                </tbody>
              </table>
            </div> 

            <div> <br />

                <button className='btn btn-outline-success float-end'
              style={{position: 'relative', top: '0px', right: '19px'}}
              onClick={() => updateOrderStatusAll(customerOrder)} title="Set all as packaged">Pack All</button>

            </div>

          </div>
          
         
        </div>

      

        </main>
    )
}

export default InventoryPendingOrders;