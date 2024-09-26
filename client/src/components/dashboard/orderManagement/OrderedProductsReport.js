import React, { useEffect, useState, useRef } from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";

function OrderedProductsCount(){

    const [data, setData] = useState();
    const [error, setError] = useState();
    

    useEffect(() => {
        const getProducts = async () => {
            const response = await fetch('/api/v7/orderedProduct/getNumberOfOrders');
            const json = await response.json();
            

            if (response.ok) {
                setData(json);
                console.log(json)
            }

            if (!response.ok) {
                setError(json.error);
                console.log(error);
            }
        };

        getProducts();
        
    }, [])

    //fetching inventory products
    const[products, setProducts] = useState('')
 
  useEffect(() => {
    const fetchProduct = async () => {
      
      const response = await fetch('/api/inventoryProducts')
      const json = await response.json()
      
      if (response.ok) {
          setProducts(json)
          //console.log(json)
 
      } else{
        console.log("not ok")
      }
       
    }
 
    fetchProduct()
    
  })


    return (
        <>
            <h1>Ordered that have been placed for each Product (last 30 days)</h1>
            <div style={{marginLeft:"auto", marginRight:"auto" }}>
                <BarChart
                    width={810}
                    height={500}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,                                                   
                        bottom: 5
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="_id" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Total" fill="#0084d8" />
                </BarChart>
            </div>
        </>
    )

}


export default OrderedProductsCount;