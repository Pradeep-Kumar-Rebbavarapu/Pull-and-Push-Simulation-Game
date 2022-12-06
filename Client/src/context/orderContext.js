import { createContext,  useState } from "react";


export const OrderContext=createContext();

export const OrderContextProvider=({children})=>{
    const [order,setOrder]=useState(null);

    const backInfoToW5= async(input)=>{
      // console.log(input);
      
        // setOrder(input);
        // console.log(order);
    }
    return (
        <OrderContext.Provider value={{order, backInfoToW5}}>
          {children}
        </OrderContext.Provider>
      );
}