import { useState,ReactNode,createContext,useEffect } from "react";


interface MoodEffectValue {
   effect: string;
   setEffect: any;
   toggleTheme: (input: string) => void;
}


interface MoodEffectProviderProps {
    children: ReactNode;
  }

export const MoodEffectContext = createContext<MoodEffectValue | null>(null);

export const MoodEffectProvider=({children}:MoodEffectProviderProps)=>{

    const printEffects = localStorage.getItem("effect");

 const [effect,setEffect]=useState<string>(
    printEffects? JSON.parse(printEffects) : 'light'
 );

 const toggleTheme=()=>{
    setEffect((curr)=>curr === 'light' ? 'dark' : 'light')
 }

 useEffect(()=>{
    localStorage.setItem("effect", JSON.stringify(effect));
 },[effect])

 const contextValue: MoodEffectValue = {
    effect,
    setEffect,
    toggleTheme
  };

 return(
    <MoodEffectContext.Provider value={contextValue}>
        {children}
    </MoodEffectContext.Provider>
 )


}