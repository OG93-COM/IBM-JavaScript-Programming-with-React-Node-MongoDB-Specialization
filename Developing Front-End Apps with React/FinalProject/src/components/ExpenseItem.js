import React, { useContext } from 'react';
import { MdDeleteForever } from "react-icons/md";
import { AppContext } from '../context/AppContext';
import increaseIcon from '../assets/increase.png'
import decreaseIcon from '../assets/decrease.png'

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);
    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };
    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }
    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });
    }
    return (
        <tr>
        <td>{props.name}</td>
        <td>{props.currency}{props.cost}</td>
        <td><button onClick={event=> increaseAllocation(props.name)} className='border-0 bg-white'> <img src={increaseIcon} className='w-25 cursor-pointer' /></button></td>
        <td><button onClick={event=> decreaseAllocation(props.name)} className='border-0 bg-white'> <img src={decreaseIcon} className='w-25 cursor-pointer' /></button></td>
        <td><MdDeleteForever size='1.5em' onClick={handleDeleteExpense}></MdDeleteForever></td>
        </tr>
    );
};
export default ExpenseItem;