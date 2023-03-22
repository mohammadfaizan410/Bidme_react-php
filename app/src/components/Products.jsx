import React, { useEffect, useState } from 'react'
import { useStoreActions, useStoreState } from 'easy-peasy';
import jQuery from 'jquery';
import ProductCard from './ProductCard';

function Products() {
    const productList = useStoreState((state) => state.productList);
    const setProductList = useStoreActions((actions) => actions.setProductList);
    
    const [bidAmount, setBidAmount] = useState("");
    const [error, setError] = useState("");
    const [bidError, setBidError] = useState("");

    const getAllProducts = () => {
        setError("")
        jQuery.ajax({
            method: "GET",
            url: "http://localhost/bidMe_backend/setProducts.php",
            
            success: function (data) {
                if (data === "no products") {
                    setError("No products to show at the moment!")
                }
                else if (data === "could not fetch products") {
                    setError("Could not fetch products from the database!")
                }
                else if (data === "could not fullfill request") {
                    setError("Could not connect to the database")
                }
                else {
                    if (JSON.stringify(data) != JSON.stringify(productList)) {
                        setProductList(JSON.parse(data));
                    }
                }
            }
        })
    };
    
    const handleChange = (e) => {
        setBidAmount(e.target.value);
    };
    
    const handleNewBid = (e, latest_bid, isOver) => {
        setBidError("");
        if (isOver) {
            setBidError("Bidding has ended for this piece");
        }
        else if (bidAmount === "") {
            setBidError("Bid cannot be empty")
        }
        else if (!((/^\d+$/).test(bidAmount))) {
            setBidError("Please enter numbers only")
        }
        else if (parseInt(bidAmount) < parseInt(latest_bid)) {
            setBidError("Please enter a value greater than the latest bid");
        }
        else {
            jQuery.ajax({
                method: "GET",
                url: "http://localhost/bidMe_backend/handleNewBid.php",
                data: {
                    id: e.target.value,
                    bidAmount: bidAmount ? bidAmount : ""
                },
                success: function (data) {
                    if (data) {
                        console.log(data)
                    }
                }
            })
            productList.forEach(element => {
                if (element.id === e.target.value.id) {
                    element.latest_bid = bidAmount;
                }
            });
            setProductList(productList);
        }
    };  

    const handleError = () => {
        setBidError("");
    };
    
    useEffect(() => {
        setInterval(() => {
            getAllProducts()
        }, 500);
    }, []);
  
  return (
      <div className='container-padded products-container'>          
          {error.length > 0 ? <div className='validation-error'>{error}</div> : <div style={{ display: "flex", justifyContent: "center" }}>
              <div className='product-list' style={bidError ? { opacity: "0.4" } : { opacity: "1" }} >{productList.length > 0 ? productList.map((product, key) => {
            return (
                <ProductCard
                    key={key}
                    id={product.id}
                    name={product.name}
                    description={product.description}
                    latest_bid={product.latest_bid}
                    bidAmount= {bidAmount}
                    onChange={handleChange}
                    handleNewBid={handleNewBid}
                    endDate={product.end_date}
                    image_src= {product.image_src}
                />
            )
              }) : ""}</div>
              {bidError ? <div className='bidError-container'><div className='bidError-inner'>
                  <p className='validation-error'>{bidError}</p>
                  <button className='submit-btn' onClick={handleError}>Close</button>
              </div></div> : ""}
              </div>}
    </div>
  )
}

export default Products