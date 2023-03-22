import React from 'react'
import "./styles/productStyles.css"
import { useStoreState } from 'easy-peasy';


function ProductCard(props) {
  const userStore = useStoreState((state) => state.userStore);
  const id = props.id;
  const latest_bid = props.latest_bid;
  
  function formatDate() {
    var d = new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
  }
  
  const currentDate = formatDate();

  const endDate = Date.parse(props.endDate);
  const current = Date.parse(currentDate);
  const image_src = "" + props.image_src;
  return (
      <div className='productcard-container'>
      <img className='product-img' src={image_src} alt="" />
          <h3>{ props.name }</h3>
          <p className='product-desc'>{ props.description }</p>
          <h3>Latest bid : ${props.latest_bid}</h3>
          {endDate < current ? <h3 className='validation-error'>Bid ended</h3>  : <h3>Bid End : {props.endDate}</h3>}
          
          <input type="text" className='input-item' placeholder={props.latest_bid} onChange={props.onChange}></input>
          {userStore.name  ?  <button className='submit-btn' type='submit' value={id} onClick={(e) => props.handleNewBid(e,latest_bid,endDate<current)}>Bid</button>
        :           <div><button className='submit-btn' type='submit' value={id} onClick={(e) =>props.handleNewBid(e, latest_bid, endDate<current)} disabled>Bid</button><p className='validation-error'>Login required!</p></div>
      }

        </div>
  )
}

export default ProductCard