import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { useEffect } from 'react';
const Budget = () => {
    const { budget, currency, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (e) => {
        setNewBudget(e.target.value);
        dispatch({
            type: 'SET_BUDGET',
            payload: newBudget,
        })

    }

    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}{budget}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;