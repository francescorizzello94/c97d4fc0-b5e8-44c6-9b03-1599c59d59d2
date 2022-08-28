import { useContext, createContext, ReactNode, useState } from "react";

type EventListContextType = {
  getEventItemQuantity: (_id: string) => number;
  increaseListQuantity: (_id: string) => void;
  decreaseListQuantity: (_id: string) => void;
  removeFromList: (_id: string) => void;
}

type EventListProviderProps = {
  children: ReactNode;
}

type ListItem = {
  _id: string;
  quantity: number;
}

const EventListContext = createContext({});

export function useEventList() {
  return useContext(EventListContext);
}

export function EventProvider(
  { children }: EventListProviderProps) {
  const [listItems, setListItems] = useState<ListItem[]>([]);

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

  return (
    <EventListContext.Provider value={{getEventItemQuantity, increaseListQuantity, decreaseListQuantity}}>
      {children}
    </EventListContext.Provider>
  )
}