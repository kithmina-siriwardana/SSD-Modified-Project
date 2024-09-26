import React from  'react';

import {useState, useEffect} from 'react';

function InventoryPastOrders (){

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
  
  
  
      return(
  
          <main id="main" className="main">
  
              <br /><div className="pagetitle">
                  <h1>Past Orders</h1>
              </div> <br />
  
  
          
  
          {/* <div className="card">
            <div className="card-body">
            <center><h5 className="card-title">Products</h5></center>
  
              <div className="card-body" style={{height: '285px', overflow: 'auto'}}>
                
              <table className="table table-hover" style={{textAlign: 'center', verticalAlign: 'middle'}}>
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
                                {(ipo.status == "Pending")
                                 ? 
                                 <>
                                    <th scope="row">{inventoryProductOrders.indexOf(ipo) + 1}</th>
                                    <td>{ipo.product.split(',')[0]}</td>
                                    <td>{ipo.productQuantity}</td>
                                    <td>{ipo.currentDate.split('T')[0]}</td>
                                    <td>{ipo.status}</td> 
                                 </>

                                 : 

                                 <>
                                 </>

                                 }

                                        
                              </tr>
                            )) 
                            
                            }
                  </tbody>
                </table>
               
              </div>
  
            </div>
          </div> */}
  

  

          
  
          <div className="card">
            <div className="card-body">
            <center><h5 className="card-title">Raw Materials</h5></center>
  
              <div className="card-body" style={{height: '285px', overflow: 'auto'}}>
              <table class="table table-hover" style={{textAlign: 'center', verticalAlign: 'middle'}}>
                  <thead>
                    <tr>
                      <th scope="col">#</th>
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
                  {rawMaterialOrder && rawMaterialOrder.map((rmo) => 
                          (
                              <tr key={rmo._id}>
                                 {(rmo.orderStatus === "Received") 
                                  ?
                                  <>
                              <th scope="row">{rawMaterialOrder.indexOf(rmo) + 1}</th>
                              <td>{rmo.rawMaterial}</td>
                              <td>{rmo.supplierId}</td>
                              <td>{rmo.Date.split('T')[0]}</td>
                              <td>{rmo.quantity}</td>
                              <td>{rmo.unit}</td>
                              <td>{rmo.orderStatus}</td>   
                              </>
                              
                              :

                              <>
                              </>
                            }

                            </tr>
                          ))}
                  </tbody>
                </table>
              </div>
  
            </div>
          </div>
  
       
  
  
          </main>
      )
  }
  
  export default InventoryPastOrders;