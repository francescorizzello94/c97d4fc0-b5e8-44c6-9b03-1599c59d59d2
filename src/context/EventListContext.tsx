import { useContext, createContext, ReactNode, useState } from "react";

type EventListContextType = {
  increaseListQuantity: (_id: string) => void;
  removeFromList: (_id: string) => void;
}

const EventListContext = createContext({});

export function useEventList() { 
  return useContext(EventListContext);
}

type EventListProviderProps = {
  children: ReactNode;
}

type ListItem = {
  added: boolean;
  _id: string;
  quantity: number;
}

export function EventProvider({ children }
  : EventListProviderProps) { 
  const [listItems, setListItems] = useState<ListItem[]>([]);

  
  return (
    <EventListContext.Provider value={{}}>
    { children }
  </EventListContext.Provider>
  )
}