import React from 'react';
import {useState, useEffect} from 'react'

import html2canvas from 'html2canvas';
import jspdf from 'jspdf';


function InventoryReports() {
  
  /*************************************************************************** */
  Date.prototype.ddmmyyyy = function(){
    var mm = this.getMonth() + 1; // getMonth() is zero-based
    var dd = this.getDate();

  return [ (dd>9 ? '' : '0') + dd,
          (mm>9 ? '' : '0') + mm,
          this.getFullYear(),

         ].join('/');
  }

  let today = new Date()
  let date = today.ddmmyyyy()
  let hrs = today.getHours()
  hrs = (hrs % 12) || 12;

  let time = hrs + ':' + (today.getMinutes() <= 9 ? '0' + today.getMinutes() : today.getMinutes()) + ' ' +
             (today.getHours() >= 12 ? 'PM' : 'AM')

  /*************************************************************************** */


    //download as pdf function - stock cost report
    const exportStockCostReport = () => {
        const input = document.getElementById('stockCostReport')
        
        html2canvas(input, {logging: true, letterRebndering: 1, useCORS: true}).then(canvas => {
            const imgWidth = 208;
            const imgHeight = canvas.height * imgWidth/canvas.width;
            const imgData = canvas.toDataURL('/img/png');

            const pdf = jspdf('p', 'mm', 'a4')
            
            pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight)

            pdf.save('Inventory Stock Cost Report.pdf')
        });
    }


  /***********************************************************************************************/


  /*************************************************************************** */


    //download as pdf function - item list report
    const exportItemListReport = () => {
      const input = document.getElementById('itemListReport')
      
      html2canvas(input, {logging: true, letterRebndering: 1, useCORS: true}).then(canvas => {
          const imgWidth = 208;
          const imgHeight = canvas.height * imgWidth/canvas.width;
          const imgData = canvas.toDataURL('/img/png');

          const pdf = jspdf('p', 'mm', 'a4')
          
          pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight)

          pdf.save('Inventory Item List Report.pdf')
      });
  }


/***********************************************************************************************/



  const[products, setProducts] = useState(null)

  
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('/api/inventoryProducts')
      const json = await response.json()

      if(response.ok){
        setProducts(json)

        console.log(products)
      }

    }

    fetchProducts()

  }, [])


/***********************************************************************************************/

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

   /***********************************************************************************************/



    return(
      
        <main id="main" className="main">
            <div className="pagetitle"><h1>Reports</h1></div>

            <br />


            <div className='d-flex'>
   
                <button type="button" data-bs-toggle="modal" data-bs-target="#fullscreenModal1" className='shadow-sm p-3 mb-5 bg-body rounded' style={{
                    height: '150px', 
                    width: '300px',
                    border: '0px',
                    justifyContent: 'center',
                    }}
                    >


                    <h5 className="card-title">Stock Cost Report</h5>

                </button> 

                &nbsp; &nbsp; &nbsp; &nbsp;

                <button type="button" data-bs-toggle="modal" data-bs-target="#fullscreenModal2" className='shadow-sm p-3 mb-5 bg-body rounded' style={{
                    height: '150px', 
                    width: '300px',
                    border: '0px',
                    justifyContent: 'center',
                    }}>

                    <h5 className="card-title">Item List Report</h5>

                </button>

            </div>

        

                {/*start of full screen modal for inventory stock cost report*/}
              <div className="modal fade" id="fullscreenModal1" tabindex="-1">
                <div className="modal-dialog modal-fullscreen">
                  <div className="modal-content" style={{width: '100%'}}>

                  <span className='table-responsive' style={{maxHeight: '900px'}}>

                  <header id="stockCostReport">
               
                    <div className="modal-header" style={{backgroundColor: '#f2f0f0'}}>
                      <img src={require('./images/jiffyLogo.png')} style={{height: '65px', width: '65px', backgroundColor: '#f2f0f0'}}/>

                      &nbsp;&nbsp;&nbsp;<h5 className="modal-title">Inventory Stock Cost Report</h5>


                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>


                   
                    <div className="modal-body">

                    <div  style={{backgroundColor: '#f2f0f0'}}>
                      <p>Item: All <p className='float-end'>Run Date:&nbsp;&nbsp;{date} &nbsp;&nbsp;{time} </p></p> 
                    </div> <br />

                   
                    <h6 className="modal-title" style={{fontStyle: 'italic'}}><strong>Products</strong></h6>

                   
                    <table className="table table-bordered" style={{position: 'relative', top: '10px'}}>
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Product No</th>
                    <th scope="col">Name</th>
                    <th scope="col">On-Hand</th>
                    <th scope="col">Unit Cost (Rs.)</th>
                    <th scope="col">Total Cost (Rs.)</th>
                  </tr>
                </thead>
                <tbody>

                  {products && products.map((product) => 
                  (    

                    <>
                      <tr key={product._id}>
                        <th scope="row">{products.indexOf(product) + 1}</th>
                        <td>{'P__'+product._id}</td>
                        <td>{product.product_name}</td>
                        <td>{product.units_in_stock}</td>
                        <td>{product.unit_price}</td> 
                        <td>{product.unit_price * product.units_in_stock}</td> 
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>


                <br /><br /><br />

              <h6 className="modal-title" style={{fontStyle: 'italic'}}><strong>Raw Materials</strong></h6>

                    <table className="table table-bordered" style={{position: 'relative', top: '10px'}}>
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Raw Material No</th>
                    <th scope="col">Name</th>
                    <th scope="col">On-Hand</th>
                    <th scope="col">Unit Cost (Rs.)</th>
                    <th scope="col">Total Cost (Rs.)</th>
                  </tr>
                </thead>
                <tbody>
                  {rawMaterials && rawMaterials.map((rawMaterial) => (
                    <>
                       <tr key={rawMaterial._id}>
                        <th scope="row">{rawMaterials.indexOf(rawMaterial) + 1}</th>
                        <td>{'R__'+rawMaterial._id}</td>
                        <td>{rawMaterial.raw_material_name}</td>
                        <td>{rawMaterial.qty_in_stock}</td>
                        <td>{rawMaterial.unit_price}</td>
                        <td>{rawMaterial.unit_price * rawMaterial.qty_in_stock}</td>
                      </tr>
                    </>
                  ))}
                 
                </tbody>
              </table>

        
        
                    </div>

                  </header>
                  
                </span>
                    

                  

                    <div className="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">CLOSE</button>
                      <button type="button" class="btn btn-primary" onClick={() => exportStockCostReport()}>DOWNLOAD</button>
                    </div>
                  </div>
                </div>
              </div>
              {/*end of full screen modal for inventory stock cost report*/}



             {/************************************************************************************************************* */}


              {/*start of full screen modal for inventory item list report*/}
              <div className="modal fade" id="fullscreenModal2" tabindex="-1">
                <div className="modal-dialog modal-fullscreen">
                  <div className="modal-content" style={{width: '100%'}}>

                  <span className='table-responsive' style={{maxHeight: '900px'}}>

                  <header id="itemListReport">
               
                    <div className="modal-header" style={{backgroundColor: '#f2f0f0'}}>
                      <img src={require('./images/jiffyLogo.png')} style={{height: '65px', width: '65px', backgroundColor: '#f2f0f0'}}/>

                      &nbsp;&nbsp;&nbsp;<h5 className="modal-title">Inventory Item List Report</h5>


                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>


                   
                    <div className="modal-body">

                    <div  style={{backgroundColor: '#f2f0f0'}}>
                      <p>Item: All <p className='float-end'>Run Date:&nbsp;&nbsp;{date} &nbsp;&nbsp;{time} </p></p> 
                    </div> <br />

                   
                    <h6 className="modal-title" style={{fontStyle: 'italic'}}><strong>Products</strong></h6>

                   
                    <table className="table table-bordered" style={{position: 'relative', top: '10px'}}>
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Product No</th>
                    <th scope="col">Name</th>
                    <th scope="col">Bucket</th>
                    <th scope="col">Quantity</th>
                  </tr>
                </thead>
                <tbody>

                  {products && products.map((product) => 
                  (    

                    <>
                      <tr key={product._id}>
                        <th scope="row">{products.indexOf(product) + 1}</th>
                        <td>{'P__'+product._id}</td>
                        <td>{product.product_name}</td>
                        <td>{product.units_in_stock > product.reorder_level ? "On Hand"
                              : (product.units_in_stock < product.reorder_level && product.units_in_stock !== 0) ? "Reorder"
                              : "Out of Stock"}</td>
                        <td>{product.units_in_stock}</td> 
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>


                <br /><br /><br />

              <h6 className="modal-title" style={{fontStyle: 'italic'}}><strong>Raw Materials</strong></h6>

                    <table className="table table-bordered" style={{position: 'relative', top: '10px'}}>
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Raw Material No</th>
                    <th scope="col">Name</th>
                    <th scope="col">Bucket</th>
                    <th scope="col">Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {rawMaterials && rawMaterials.map((rawMaterial) => (
                    <>
                       <tr key={rawMaterial._id}>
                        <th scope="row">{rawMaterials.indexOf(rawMaterial) + 1}</th>
                        <td>{'R__'+rawMaterial._id}</td>
                        <td>{rawMaterial.raw_material_name}</td>
                        <td>{rawMaterial.qty_in_stock > rawMaterial.reorder_level ? "On Hand"
                              : (rawMaterial.qty_in_stock < rawMaterial.reorder_level && rawMaterial.qty_in_stock !== 0 ) ? "Reorder"
                              : "Out of Stock"}</td>
                        <td>{rawMaterial.qty_in_stock}</td>
                      </tr>
                    </>
                  ))}
                 
                </tbody>
              </table>

        
        
                    </div>

                  </header>
                  
                </span>
                    

                  

                    <div className="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">CLOSE</button>
                      <button type="button" class="btn btn-primary" onClick={() => exportItemListReport()}>DOWNLOAD</button>
                    </div>
                  </div>
                </div>
              </div>
              {/*end of full screen modal for inventory item list report*/}




               {/*start of full screen modal for inventory restock report*/}
               {/*end of full screen modal for inventory restock report*/}





        </main>
        
    )
}

export default InventoryReports;