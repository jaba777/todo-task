import React, { useState, useEffect, createContext, ReactNode } from "react";

interface ListUser {
  id: number | string;
  list: string;
  marked: boolean;
}

interface DailyContextProviderProps {
  children: ReactNode;
}

interface CreateListContextValue {
  currentList: ListUser | null;
  setCurrenList: any;
  createListHandler: (inputs: ListUser) => void;
  deleteListHandler: (id:number|string)=>void;
  markedHandler:  (id:number|string)=>void;
}

export const createListContext = createContext<CreateListContextValue | null>(null);

export const DailyContextProvider = ({ children }: DailyContextProviderProps) => {
  const listItems = localStorage.getItem("lists");

  const [currentList, setCurrenList] = useState<ListUser[] | null | any>(
    listItems ? JSON.parse(listItems) : null
  );

  const createListHandler = (inputs: ListUser) => {

    if (currentList?.length) {
        setCurrenList([...currentList,{
            id: inputs?.id,
            list: inputs?.list,
            marked: inputs?.marked
          }]);
      } else {
        setCurrenList([{
            id: inputs?.id,
            list: inputs?.list,
            marked: inputs?.marked
          }]);
      }
  };

  const deleteListHandler=(id:number|string)=>{
    setCurrenList(currentList.filter((event:ListUser | any)=> event.id !== id))

  }

  const markedHandler=(id:number|string)=>{
    const findObject=currentList.find((e:ListUser|any)=> e.id === id);
   
      setCurrenList(currentList.map((e:ListUser|any)=> e.id === id ? {...findObject,marked:!findObject.marked} : e))
    
  }

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(currentList));
  }, [currentList]);

  const contextValue: CreateListContextValue = {
    currentList,
    setCurrenList,
    createListHandler,
    deleteListHandler,
    markedHandler
  };

  return (
    <createListContext.Provider value={contextValue}>
      {children}
    </createListContext.Provider>
  );
};

