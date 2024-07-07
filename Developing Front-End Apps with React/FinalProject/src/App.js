import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './components/Budget';
import { AppProvider } from './context/AppContext';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import ExpenseItem from './components/ExpenseItem';
import AllocationForm from './components/AllocationForm';
import ChangeCurrency from './components/ChangeCurrency';

const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                <div className='row mt-3'>
                    {/*     // Budget component */}
                        <div className='col-sm'>
                            <Budget />
                        </div>
                    {/* //Remaining component */}
                        <div className='col-sm'>
                            <Remaining />
                        </div>
                    {/* //ExpenseTotal component */}
                        <div className='col-sm'>
                            <ExpenseTotal />
                        </div>
                        <div className='col-sm'>
                            <ChangeCurrency/>
                        </div>
                    
                        
                </div>
                    <div className='row mt-3'>
                    {/* //ExpenseList component */}
                    <div className='col-sm'>
                        <ExpenseList />
                    </div>
                </div>
                {/* //AllocationForm component */}
                        <AllocationForm />
            </div>
        </AppProvider>
    );
};
export default App;
