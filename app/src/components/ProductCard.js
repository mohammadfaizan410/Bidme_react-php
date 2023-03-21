import React from 'react'
import "./productStyles.css"
import { useStoreState } from 'easy-peasy';


function ProductCard(props) {
  const userStore = useStoreState((state) => state.userStore);
  const id = props.id;
  const latest_bid = props.latest_bid;
  return (
      <div className='productcard-container'>
          <img className='product-img' src="http://www.leonardodavinci.net/images/leonardo-da-vinci.jpg" alt="" />
          <h3>{ props.name }</h3>
          <p className='product-desc'>{ props.description }</p>
          <h3>Latest bid : ${props.latest_bid}</h3>
          <input type="text" className='input-item' placeholder={props.latest_bid} onChange={props.onChange}></input>
      {userStore.name ? <button className='submit-btn' type='submit' value={id} onClick={(e) => props.handleNewBid(e,latest_bid)}>Bid</button>
        :           <div><button className='submit-btn' type='submit' value={id} onClick={(e) =>props.handleNewBid(e, latest_bid)} disabled>Bid</button><p className='validation-error'>Login required!</p></div>
      }
        </div>
  )
}

export default ProductCard