
import { useEffect } from "react";
import { useState } from "react";
export default function useLocalStorage(keyName, initialValue) {
  
    const  [ storedTodos , setStoredTodos] = useState( ()=>{
        
        // read from localStorage on first render or create it for the first time.
        try{
          
        const item = localStorage.getItem(keyName);
        return item ? JSON.parse(item) : initialValue;
        }
        catch(error){
            console.log(error);
            return initialValue;
        }
    });


    // syncing with the localstorage 
    useEffect( ()=>{
        try{
            localStorage.setItem(keyName,JSON.stringify(storedTodos));
        }
        catch(error){
            console.log(error);
        }
    }, [keyName, storedTodos]);

  return [storedTodos,setStoredTodos];
}
