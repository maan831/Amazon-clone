import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './Stateprovider';
const CheckoutProduct = ({id,image,price,rating,title,hiddenbutton}) => {
    const [{basket},dispatch] = useStateValue();

    const removeFromBasket = ()=> {
      dispatch({
        type:'REMOVE FROM BASKET',
        id: id,

      })
    }
  return (
    <div className='checkoutproduct'>
     <img src={image} alt='ko' className='checkoutproduct-image'/>
     <div className='checkoutproduct-info'>
        <p className='checkoutproduct-title'>{title}</p>
        <p className='checkoutproduct-price'>
            <small>$</small>
            <strong>{price}</strong>
        </p>
        <div className='checkoutproduct-rating'>
            {
                Array(rating).fill().map((_,i)=>(<p>🌟 </p>))
            }
        </div>
        {!hiddenbutton && (<button onClick={removeFromBasket}>Remove From Basket</button>)}
        
        </div>
    </div>
   
  )
}

export default CheckoutProduct