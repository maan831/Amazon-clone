import React from 'react'
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './Stateprovider';
import { getBasketTotal } from './Reducer';
import { useNavigate } from 'react-router-dom';
const Subtotal = () => {
    const [{basket},dispatch] = useStateValue();
    const history = useNavigate();

  return (
    <div className="subtotal">
       <CurrencyFormat
       renderText={(value)=>(
        <>
        <p>
            SubTotal ({basket.length} items):<strong>{value}</strong>
            
        </p>
        <small className='subtotal-gift'>
          <input type='checkbox'/>
          This Order Contains Gift
        </small>
        </>
       )}
       decimalScale={2}
       value={getBasketTotal(basket)}
       displayType={'text'}
       thousandSeparator={true}
       prefix={'$'}
       />
       <button onClick={e=>history('/payment')}>Proceed To Checkout</button>
    </div>
  )
}

export default Subtotal