import  { createContext } from "react";

const DataContext = createContext({
    totalAmount: 0,
    items: [],
    addItem: (item) => {}, 
    removeItem: (id) => {}
});


export default DataContext;