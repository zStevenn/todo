import { useParams } from 'react-router-dom';

export default function ViewList() {
  const { listId } = useParams();

  return <h1>You are on the list page of: {listId}</h1>;
}
