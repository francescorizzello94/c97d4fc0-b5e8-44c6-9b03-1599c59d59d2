import { useContext, createContext, ReactNode } from "react";

const EventListContext = createContext({});

export function useEventList() { 
  return useContext(EventListContext);
}

type EventListProviderProps = {
  children: ReactNode;
}

export function EventProvider({ children }
  : EventListProviderProps) { 
  return <EventListContext.Provider value={{}}>
    { children }
  </EventListContext.Provider>
}