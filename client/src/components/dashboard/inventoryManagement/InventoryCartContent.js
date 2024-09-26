import React from 'react';


function InventoryCartContent(){
    return(
        <main id="main" className="main">

            <div className="pagetitle">
                <h1>Cart Overview</h1>
            </div> <br />

            <ol class="list-group list-group-numbered">
                <li class="list-group-item d-flex justify-content-between align-items-start">
                  <div class="ms-2 me-auto">
                    <div class="fw-bold">Wool</div>
                    <p>Quantity: 20&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Unit: KG&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Supplier: ABC&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;Total: Rs. 3000</p>
                  </div>
                  <button type="button" className="deleteBtn"><i className='bi bi-trash'></i></button>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-start">
                  <div class="ms-2 me-auto">
                    <div class="fw-bold">Pellet</div>
                    <p>Quantity: 20&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Size (s): Small, Large&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;Total: Rs. 3000 </p> 
                  </div>
                  <button type="button" className="deleteBtn"><i className='bi bi-trash'></i></button>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-start">
                  <div class="ms-2 me-auto">
                    <div class="fw-bold">Cotton</div>
                    <p>Quantity: 20&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Unit: KG&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Supplier: ABC&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;Total: Rs. 3000</p>
                  </div>
                  <button type="button" style={{
                    border: 'none',
                    borderRadius: '5px 5px 5px 5px',
                    position: 'relative',
                    top: '20px',
                    backgroundColor: 'white'
                  }}><i className='bi bi-trash'></i></button>
                </li>
              </ol>

              <br /><br />


              <div className="text-center">
        
                <button type="submit" className="btn btn-primary float-end">PAY</button> &nbsp;&nbsp;&nbsp;
                </div>


        </main>
    );
}

export default InventoryCartContent;