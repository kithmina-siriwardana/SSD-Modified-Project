import React from 'react';

import {useNavigate} from 'react-router-dom';
import {Link} from "react-router-dom";

import {useState, useEffect} from 'react';

function InventoryRawMaterialsContent(props){

  let navigate = useNavigate();

  //navigates to the add new raw material page when add button is clicked
  function handleAddBtnOnClick(){
    let path = "/inventory-add-raw-material-page";
    navigate(path);
  }

  const[rawMaterials, setRawMaterials] = useState(props.rawMaterials)

  useEffect(() => {
    
    setRawMaterials(props.rawMaterials)

  }, [props.rawMaterials])


    return(
        <div>
            <div className="pagetitle">
                <h1>Raw Materials</h1>
            </div> <br />


            <div style={{position: 'relative', bottom: '40px'}}>
                
                <div className="float-end" style={{position: 'absolute', right: '318px', top: '5.6px'}}>
                    <button type="button" class="btn btn-primary rounded-pill" id="productAddBtn" onClick={handleAddBtnOnClick}>ADD</button>
                </div>

            </div>

            {rawMaterials && rawMaterials.map((rawMaterial) => (
                
                <>
                  <div className="card w-25" key={rawMaterial._id}>
                  <div className="card-body">
           
                    <h5 className="card-title">{rawMaterial.raw_material_name}</h5>
                    <p className="card-text">In Stock : <b>{(rawMaterial.qty_in_stock == 0) ? <font color="red">NO</font> : <font color="green">YES</font>}</b></p>
              
                  <Link to={"/inventory-raw-material-overview-page/"+rawMaterial._id} className="card-link float-end">View</Link> 
        
                 </div>
                 </div>
                </>
                
            ))}


        </div>
    );
}

export default InventoryRawMaterialsContent;