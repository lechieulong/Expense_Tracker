import { useReducer } from "react";
import DataContext from './DataContext'


const defaultExpenseState = {
    items: [],
    totalAmount: 0,
}

const commonReducer = (state, action) => {
   if(action.type === 'ADD'){
    const newTotal = (state.totalAmount + action.item.amount) ;
    const updateItem = [...state.items,{
        id: 1,
        amount: action.item.amount,
        message: action.item.message,
        time: '23-12-2022',    
        }]
     return {
        items: updateItem,
        totalAmount: newTotal,
     }
   }

    return defaultExpenseState;
}

const DataProvider = (props) => {

    const [expenseState, dispatchExpenseAction] = useReducer(commonReducer,defaultExpenseState)

    const addItemHandler = (item) => {
        dispatchExpenseAction({type: 'ADD' ,  item: item})
    }
    const removeItemFromCartHandler = () => {

    }


    const dataCtx = {
        items: expenseState.items,
        totalAmount: expenseState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemFromCartHandler,
    }

    return (
        <DataContext.Provider value={dataCtx}>
            {props.children}
        </DataContext.Provider>
    )
}
 export default DataProvider;