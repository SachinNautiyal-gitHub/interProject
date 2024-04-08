import React,{ useEffect, useState } from "react";

const AppContext = React.createContext();




const AppProvider = ({children})=>{

    const [users, setusers] = useState([]);
    
    const Api = "https://jsonplaceholder.typicode.com"

    const FetchData =async ()=>{
      
        const data = await fetch(`${Api}/users`);
        const res = await data.json();
        console.log(res);
        setusers(res);

    }


    useEffect(()=>{
        FetchData()
    },[]);
   
    return <AppContext.Provider value={{users}}>
        {children}
    </AppContext.Provider>
}


export {AppContext, AppProvider};