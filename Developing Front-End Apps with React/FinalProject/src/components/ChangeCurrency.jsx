import React, {useContext} from 'react'
import { AppContext } from '../context/AppContext';
import { useState, useRef } from 'react';

const ChangeCurrency = () => {
    const { dispatch, currency } = useContext(AppContext);
    const [currencySelected, setCurrencySelected] = useState(currency)
    const selectRef = useRef()
    const changeTheCurrency = () => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: selectRef.current.value,
        });
        setCurrencySelected(selectRef.current.value)
    }
    
  return (
    <>
    <select
    ref={selectRef}
    defaultValue={currencySelected}
    onChange={changeTheCurrency}
    class="form-select bg-success text-white"
    aria-label="Select Currency">
        <option selected value="$">$ Dollar</option>
        <option value="£">£ Pound</option>
        <option value="€">€ Euro</option>
        <option value="₹">₹ Ruppee</option>
    </select>
    </>
  )
}

export default ChangeCurrency