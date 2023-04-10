import React from 'react'
import AddSharpIcon from '@mui/icons-material/AddSharp';
import RemoveTwoToneIcon from '@mui/icons-material/RemoveTwoTone';

const CartAmoutToggle = ({amount, setDecrease, setIncrease}) => {
  return (
    <>
    <div className="cart-button">
        <div className="amount-toggle">
            <button onClick={() => setDecrease()}>
                <RemoveTwoToneIcon/>
            </button>
            <div className="amount-stylr">{amount}</div>
            <button onClick={() => setIncrease()}>
                <AddSharpIcon/>
            </button>
        </div>
    </div>
    </>
  )
}

export default CartAmoutToggle