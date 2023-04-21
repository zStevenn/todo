import { useParams } from 'react-router-dom';
import { Title } from '../components/Dashboard';

export default function ViewList() {
  const { listId } = useParams();

  return (
    <div className="md:max-w-screen-md md:mx-auto">
      <Title>You are on the list page of: {listId}</Title>
    </div>
  );
}
