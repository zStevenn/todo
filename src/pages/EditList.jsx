import { useParams } from 'react-router-dom';

export default function EditList() {
  const { listId } = useParams();

  return <>{listId}</>;
}
