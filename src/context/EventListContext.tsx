import { useContext, createContext, ReactNode, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

type EventListContextType = {
  //openList: () => void;
  //closeList: () => void;
  getEventItemQuantity: (_id: string) => number;
  increaseListQuantity: (_id: string) => void;
  decreaseListQuantity: (_id: string) => void;
  removeFromList: (_id: string) => void;
  listQuantity: number;
  listItems: ListItem[];
}

export type EventListProviderProps = {
  children?: ReactNode;
  name: string;
}

type ListItem = {
  _id: string;
  quantity: number;
}

const EventListContext = createContext({} as EventListContextType);

export function useEventList() {
  return useContext(EventListContext);
}

export function EventProvider(
  { children }: EventListProviderProps) {
  
  const [listItems, setListItems] = useLocalStorage<ListItem[]>("saved-events", []);
  //const [listState, toggleList] = useState(false);

  const listQuantity = listItems.reduce((quantity, item) => item.quantity + quantity, 0);

  //const openList = () => toggleList(true);
  //const closeList = () => toggleList(false);

  function getEventItemQuantity(_id: string) {
    return listItems.find(item =>item._id === _id)?.quantity || 0;
  }

  function increaseListQuantity(_id: string) {
    setListItems(currentCount => { 
      if (currentCount.find(item => item._id === _id) == null) {
        return [...currentCount, {
          _id, quantity: 1
        }]
      } else { 
        return currentCount.map(item => { 
          if (item._id === _id) {
            return { ...item, quantity: item.quantity + 1 }
          } else { 
            return item;
          }
        })
      }
    })
  }

  function decreaseListQuantity(_id: string) { 
    setListItems(currentCount => {
      if (currentCount.find(item => item._id === _id)?.quantity === 1) {
        return currentCount.filter(item => item._id !== _id)
      } else {
        return currentCount.map(item => {
          if (item._id === _id) {
            return { ...item, quantity: item.quantity - 1 }
          } else {
            return item;
          }
        })
      }
    })
  }

  function removeFromList(_id: string) { 
    setListItems(currentCount => { 
      return currentCount.filter(item => item._id !== _id);
    })
  }

  return (
    <>
    <EventListContext.Provider value={{
      getEventItemQuantity,
      increaseListQuantity,
      decreaseListQuantity,
      removeFromList,
      //openList,
      //closeList,
      listItems,
      listQuantity,
    }}>
      {children}
      </EventListContext.Provider>
    </>
  )
}