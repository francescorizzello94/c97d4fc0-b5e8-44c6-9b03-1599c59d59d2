import { Stack } from "react-bootstrap";
import { useEventList } from "../../context/EventListContext"
import listItems from '../../data/data.json';
import './ListItem.css';

type ListItemProps = {
  _id: string,
  quantity: number,
}

export function ListItem({ _id, quantity }: ListItemProps) {
  const { removeFromList } = useEventList();
  const item = listItems.find(element => element._id === _id);
  if (item === null) return null;

  return (
    <Stack direction="horizontal" gap={2} className="saved-events">
      <img src={item?.flyerFront} style={{width: "125px", height: "75px", objectFit:"cover"}} />
    </Stack>
  )
}